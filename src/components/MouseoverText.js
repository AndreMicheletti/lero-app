import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  over: {
    cursor: 'pointer',
    display: 'block',
    position: 'relative'
  },
  cipher: {
    transition: 'opacity 0.3s'
  },
  animateOpacity: {
    transition: 'opacity 0.3s'
  }
}))

function wordCrambler (val) {
  if (typeof val === "string") {
    let newString = ""
    for (var v of val) {
      const charCode = v.toString().charCodeAt(0)
      if (charCode > 33 && charCode < 122) {
        newString += String.fromCharCode(charCode - 33)[0]
      } else {
        newString += v
      }
    }
    return newString
  } else {
    if (Array.isArray(val)) {
      // console.log('is array')
      // console.log(val)
      return val.map((val2) => wordCrambler(val2))
    } else {
      // console.log('probably react component \\/')
      // console.log(val)
      if (["img"].includes(val.type)) {
        return val
      } else {
        const newChildren = wordCrambler(val.props.children)
        return React.createElement(val.type, {...val.props, children: newChildren})
      }
    }
  }
}

export default function MouseoverText ({ children, overChildren, override = false, reverse = false, ...props }) {
  const classes = useStyles()
  const [toogled, setToogle] = React.useState(false)
  const [cipherVisible, setCipher] = React.useState(false)
  React.useEffect(() => {
    setToogle(false)
    setCipher(false)
  }, [override])

  const doTransition = (val) => {
    if (override) return
    setToogle(val)
    if (val === true) {
      setCipher(false)
    }
  }

  return (
    <div
      {...props}
      className={classes.over}
      onClick={() => doTransition(!toogled)}
      onMouseEnter={() => setCipher(true)}
      onMouseLeave={() => setCipher(false)}
    >
      <div id="content1" className={classes.animateOpacity} style={{ opacity: cipherVisible ? 0 : toogled || override ? 0 : 1 }}>
        {reverse ? wordCrambler(children) : children}
      </div>
      <div id="cipher" className={classes.cipher} style={{ position: 'absolute', top: 0, opacity: cipherVisible ? 1 : 0 }}>
        {reverse ? (override ? overChildren : children) : wordCrambler(overChildren)}
      </div>
      <div id="content2" className={classes.animateOpacity} style={{ position: 'absolute', top: 0, opacity: cipherVisible ? 0 : toogled || override ? 1 : 0 }}>
        {reverse ? wordCrambler(overChildren) : overChildren}
      </div>
    </div>
  )
}

import React from 'react'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'

import Chip from '@material-ui/core/Chip'
import FormGroup from '@material-ui/core/FormGroup'
import Switch from '@material-ui/core/Switch'

import DoneIcon from '@material-ui/icons/Done'
import TodoIcon from '@material-ui/icons/Schedule'
import TwixIcon from '@material-ui/icons/VisibilityOff'

import elixirLogo from '../assets/elixir_logo.png'
import reactLogo from '../assets/react_logo.svg'
import githubLogo from '../assets/github_logo.png'

import MouseoverText from '../components/MouseoverText'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    flexGrow: 1,
    paddingTop: 15,
    padding: 8,
    fontFamily: 'VCRMono',
    fontSize: '18px',
  },
  footer: {
    paddingTop: 30,
    paddingBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  language: {
    cursor: 'default',
    fontSize: '0.9em',
    alignItems: 'baseline'
  },
  acronym: {
    fontWeight: 100,
    fontFamily: 'SourceCodePro'
  },
  code: {
    fontFamily: 'RetroGaming'
  },
  features: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    flexGrow: 0,
  },
  chip: {
    width: 'min-content',
    fontSize: '1.1em',
    marginRight: 4,
    marginBottom: 6,
  },
  doneChip: {
    width: 'min-content',
    fontSize: '1.1em',
    marginRight: 4,
    marginBottom: 6,
    borderColor: '#4ada4a',
    color: '#4ada4a'
  },
  githubChip: {
    width: 'min-content',
    fontSize: '1.1em',
    marginRight: 4,
    marginBottom: 6,
    borderColor: '#FFF',
    color: '#FFF'
  },
  twixChip: {
    width: 'min-content',
    fontSize: '1.1em',
    marginLeft: 7,
    marginRight: 4,
    marginBottom: 6,
    borderColor: '#7d130c',
    color: '#7d130c'
  },
  img: {
    marginRight: 3,
    marginBottom: -4
  }
}))

function AboutScreen ({ account }) {
  const classes = useStyles()
  const [original, setToogle] = React.useState(true)

  const Code = ({children}) => <span className={classes.code}>{children}</span>;

  return (
    <div className={classes.root}>
      <FormGroup className={classes.language} row>
        <span style={{ color: original ? '#666' : '#fff' }}>English</span>
        <Switch checked={original} onChange={() => setToogle(!original)} color="secondary" />
        <span style={{ color: original ? '#fff' : '#666' }}>Portugues</span>
      </FormGroup>
      <MouseoverText
        override={!original}
        overChildren={(<h2>What is Lero</h2>)}
      >
        <h2>O que é isso?</h2>
      </MouseoverText>
      <p>
        <MouseoverText
          override={!original}
          overChildren={"Lero is a slang in brazilian portuguese similar to small talk, but in this context it stands for"}
        >
          Lero é uma expressão em portugues para jogar conversa fora, bater um lero, mas nesse contexto ela significa
        </MouseoverText>
      </p>
      <p>
        <span className={classes.acronym}>
          <i>
            <MouseoverText override={!original} overChildren={"Hidden Responses Reader and Editor"}>Leitor Editor de Respostas Ocultas</MouseoverText>
          </i>
        </span>
      </p>
      <MouseoverText override={!original} overChildren={(
        <p>
          It is a webchat built with <Code><img className={classes.img} src={elixirLogo} height="20"/>Phoenix</Code> and <Code><img className={classes.img} src={reactLogo} height="20"/>React</Code> that encrypts its
          messages during transport. It's quite simple, not intended to be the 
          <b> most advanced, unhackable, top-tier explosive web messaging security solution</b>, 
          but you can have some fun using it.
        </p>
      )}>
        <p>
          É um webchat feito usando <Code><img className={classes.img} src={elixirLogo} height="20"/>Phoenix</Code> e <Code><img className={classes.img} src={reactLogo} height="20"/>React</Code> que encripta
          suas mensagens em trânsito. É bem simples e não pretende ser
          <b> a solução pica, top de linha, destruidora de segurança de mensagens</b>, 
          mas você pode brincar e se divertir um pouco.
        </p>
      </MouseoverText>
      <MouseoverText
        override={!original}
        overChildren={(<h2>Features</h2>)}
      >
        <h2>Funcionalidades</h2>
      </MouseoverText>
      <div className={classes.features}>
        <Chip
          className={classes.doneChip}
          color="secondary"
          variant="outlined"
          label={"encrypted messages"}
          avatar={<DoneIcon style={{ color: '#4ada4a', backgroundColor: 'transparent' }} />}
        />
        <Chip
          className={classes.chip}
          color="secondary"
          variant="outlined"
          label={"self-destructing messages"}
          avatar={<TodoIcon style={{ color: '#FFCF99', backgroundColor: 'transparent' }} />}
        />
        <Chip
          className={classes.chip}
          color="secondary"
          variant="outlined"
          label={"encrypted images"}
          avatar={<TodoIcon style={{ color: '#FFCF99', backgroundColor: 'transparent' }} />}
        />
        <Chip
          className={classes.chip}
          color="secondary"
          variant="outlined"
          label={"group chats"}
          avatar={<TodoIcon style={{ color: '#FFCF99', backgroundColor: 'transparent' }} />}
        />
        <Chip
          className={classes.chip}
          color="secondary"
          variant="outlined"
          label={"notifications"}
          avatar={<TodoIcon style={{ color: '#FFCF99', backgroundColor: 'transparent' }} />}
        />
        <Chip
          className={classes.chip}
          color="secondary"
          variant="outlined"
          label={"cool animations"}
          avatar={<TodoIcon style={{ color: '#FFCF99', backgroundColor: 'transparent' }} />}
        />
        <Chip
          className={classes.chip}
          color="secondary"
          variant="outlined"
          label={"language selector"}
          avatar={<TodoIcon style={{ color: '#FFCF99', backgroundColor: 'transparent' }} />}
        />
      </div>
      <MouseoverText override={!original} overChildren={(<h3>Want a account?</h3>)}>
        <h3>Quer uma conta?</h3>
      </MouseoverText>
      {!account.logged && (
        <MouseoverText override={!original} reverse={true} overChildren={(<span>you can't just simply type <b>lero</b></span>)}>
          você não pode simplesmente digitar <b>lero</b>
        </MouseoverText>
      )}
      {account.logged && (
        <span>
          {original ? `você já tem uma, ${account.user.secretCode}` : `you already got one, ${account.user.secretCode}`}
        </span>
      )}
      <h3>Repos</h3>
      <div className={classes.features}>
        <a href="https://github.com/AndreMicheletti/lero-app" target="_blank">
          <Chip
            className={classes.githubChip}
            clickable={true}
            variant="outlined"
            label={"lero-app"}
            avatar={<img src={githubLogo} height="25" />}
          />
        </a>
        <a href="https://github.com/AndreMicheletti/lero-phoenix" target="_blank">
          <Chip
            className={classes.githubChip}
            clickable={true}
            variant="outlined"
            label={"lero-phoenix"}
            avatar={<img src={githubLogo} height="25" />}
          />
        </a>
      </div>
      <div className={classes.footer}>
        <MouseoverText
          override={!original}
          overChildren={<span>Created by{' '}</span>}
        >
          <span>Criado por{' '}</span>
        </MouseoverText>
        <a href="https://github.com/AndreMicheletti/" target="_blank">
          <Chip
            className={classes.twixChip}
            clickable={true}
            variant="outlined"
            label={" Andre Micheletti"}
            avatar={<TwixIcon fontSize="inherit" style={{ color: '#7d130c', fontSize: 11 }} />}
          />
        </a>
      </div>
      <MouseoverText style={{ marginTop: 10, fontSize: '0.6em' }} reverse={true} overChildren={"secret code: twix"}>código secreto: twix</MouseoverText>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    account: state.account
  }
}

export default connect(mapStateToProps)(AboutScreen)

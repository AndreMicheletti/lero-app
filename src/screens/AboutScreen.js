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

import { PRIMARY, SECONDARY, WHITE } from '../theme'

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
    color: PRIMARY,
    '& p': {
      color: WHITE,
    },
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
    fontFamily: 'RetroGaming',
    display: 'inline-block'
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
  todoChip: {
    width: 'min-content',
    fontSize: '1.1em',
    marginRight: 4,
    marginBottom: 6,
    borderColor: '#777',
    color: '#777'
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
    borderColor: PRIMARY,
    color: PRIMARY
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

  const renderFeatures = () => {
    return (
      <div className={classes.features}>
        <Chip
          className={classes.doneChip}
          variant="outlined"
          label={"encrypted messages"}
          avatar={<DoneIcon style={{ color: '#4ada4a', backgroundColor: 'transparent' }} />}
        />
        <Chip
          className={classes.todoChip}
          variant="outlined"
          label={"gamification"}
          avatar={<TodoIcon style={{ color: '#777', backgroundColor: 'transparent' }} />}
        />
        <Chip
          className={classes.todoChip}
          variant="outlined"
          label={"encrypted images"}
          avatar={<TodoIcon style={{ color: '#777', backgroundColor: 'transparent' }} />}
        />
        <Chip
          className={classes.todoChip}
          variant="outlined"
          label={"group chats"}
          avatar={<TodoIcon style={{ color: '#777', backgroundColor: 'transparent' }} />}
        />
        <Chip
          className={classes.todoChip}
          variant="outlined"
          label={"notifications"}
          avatar={<TodoIcon style={{ color: '#777', backgroundColor: 'transparent' }} />}
        />
        <Chip
          className={classes.todoChip}
          variant="outlined"
          label={"self-destructing messages"}
          avatar={<TodoIcon style={{ color: '#777', backgroundColor: 'transparent' }} />}
        />
      </div>
    )
  }

  const renderRepos = () => {
    return (
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
    )
  }

  const renderTwix = () => {
    return (
      <a href="https://github.com/AndreMicheletti/" target="_blank">
        <Chip
          className={classes.twixChip}
          clickable={true}
          variant="outlined"
          label={" Andre Micheletti"}
          avatar={<TwixIcon fontSize="inherit" style={{ color: PRIMARY, fontSize: 11 }} />}
        />
      </a>
    )
  }

  const renderPortuguese = () => {
    return (
      <React.Fragment>
        <h2>O que é isso?</h2>
        <p>
          Lero é uma expressão em portugues para jogar conversa fora, bater um lero, mas nesse contexto ela significa
        </p>
        <p>
          <span className={classes.acronym}><i>Leitor Editor de Respostas Ocultas</i></span>
        </p>
        <p>
          É um webchat feito usando <Code><img className={classes.img} src={elixirLogo} height="20"/>Phoenix</Code> e <Code><img className={classes.img} src={reactLogo} height="20"/>React</Code> que encripta
          suas mensagens em trânsito. É bem simples e não pretende ser
          <b> a solução pica, top de linha, destruidora de segurança de mensagens</b>, mas pelo menos ninguém sabe que existe.
        </p>
        
        <h2>Funcionalidades</h2>
        {renderFeatures()}

        <h3>Quer uma conta?</h3>
        <p>Digite <strong>lero</strong> na tela de login</p>
        
        <h3>Repos</h3>
        {renderRepos()}

        <div className={classes.footer}>
          <span style={{ color: PRIMARY }}>Criado por{' '}</span>
          {renderTwix()}
        </div>
      </React.Fragment>
    )
  }

  const renderEnglish = () => {
    return (
      <React.Fragment>
        <h2>What is this?</h2>
        <p>
          Lero is a brazilian expression similar to 'small talk'. But in this context it means
        </p>
        <p>
          <span className={classes.acronym}><i>Hidden Responses Reader and Editor</i></span>
        </p>
        <p>
          Is is a webchat built with <Code><img className={classes.img} src={elixirLogo} height="20"/>Phoenix</Code> and <Code><img className={classes.img} src={reactLogo} height="20"/>React</Code>
          that encrypts your messages during transport. It's quite simple, not intended to be the 
          <b> most advanced, unhackable, top-tier explosive web messaging security solution</b>, 
          but at least no one knows it exists.
        </p>
        
        <h2>Features</h2>
        {renderFeatures()}

        <h3>Want an account?</h3>
        <p>Type <strong>lero</strong> in the login screen</p>
        
        <h3>Repos</h3>
        {renderRepos()}

        <div className={classes.footer}>
          <span style={{ color: PRIMARY }}>Created by{' '}</span>
          {renderTwix()}
        </div>
      </React.Fragment>
    )
  }

  return (
    <div className={classes.root}>
      <FormGroup className={classes.language} row>
        <span style={{ color: original ? '#666' : '#fff' }}>English</span>
        <Switch checked={original} onChange={() => setToogle(!original)} color="secondary" />
        <span style={{ color: original ? '#fff' : '#666' }}>Portugues</span>
      </FormGroup>
      {original ? renderPortuguese() : renderEnglish()}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    account: state.account
  }
}

export default connect(mapStateToProps)(AboutScreen)

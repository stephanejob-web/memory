import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Title from './components/Title/Title'
import Button from './components/Button/Button'
import Card from './components/Card/Card'
import './App.css'

interface CardType {
  id: number
  value: string
  isFlipped: boolean
  isMatched: boolean
}

function App() {
  const { t, i18n } = useTranslation()
  const allSymbols = ['🍎', '🍌', '🍇', '🍊', '🍓', '🍉', '🥝', '🍒']

  const [showPresentation, setShowPresentation] = useState(true)
  const [gameStarted, setGameStarted] = useState(false)
  const [numPairs, setNumPairs] = useState(6)
  const [cards, setCards] = useState<CardType[]>([])
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [moves, setMoves] = useState(0)
  
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }
  
  const initializeGame = (pairs: number) => {
    const symbols = allSymbols.slice(0, pairs)
    const gameCards = symbols.flatMap((symbol, index) => [
      { id: index * 2, value: symbol, isFlipped: false, isMatched: false },
      { id: index * 2 + 1, value: symbol, isFlipped: false, isMatched: false }
    ])
    const shuffledCards = gameCards.sort(() => Math.random() - 0.5)
    setCards(shuffledCards)
    setFlippedCards([])
    setMoves(0)
    setGameStarted(true)
  }

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards
      const firstCard = cards.find(c => c.id === first)
      const secondCard = cards.find(c => c.id === second)

      if (firstCard?.value === secondCard?.value) {
        setCards(prevCards => prevCards.map(card =>
          card.id === first || card.id === second 
            ? { ...card, isMatched: true } 
            : card
        ))
        setFlippedCards([])
        setMoves(prev => prev + 1)
      } else {
        setTimeout(() => {
          setCards(prevCards => prevCards.map(card => 
            card.id === first || card.id === second 
              ? { ...card, isFlipped: false } 
              : card
          ))
          setFlippedCards([])
        }, 100)
        setMoves(prev => prev + 1)
      }
    }
  }, [flippedCards])

  // Gérer le clic sur une carte
  const handleCardClick = (id: number) => {
    // Ne pas permettre de retourner plus de 2 cartes
    if (flippedCards.length === 2) return
    
    const card = cards.find(c => c.id === id)
    // Ne pas permettre de cliquer sur une carte déjà retournée ou appariée
    if (card?.isFlipped || card?.isMatched) return

    setCards(prevCards => prevCards.map(c => c.id === id ? { ...c, isFlipped: true } : c))
    setFlippedCards(prev => [...prev, id])
  }

  // Retour au menu
  const backToMenu = () => {
    setGameStarted(false)
    setCards([])
    setFlippedCards([])
    setMoves(0)
  }

  // Vérifier si le jeu est gagné
  const isGameWon = cards.length > 0 && cards.every(card => card.isMatched)

  // Écran de présentation
  if (showPresentation) {
    return (
      <div className="app">
        <div className="language-selector">
          <button
            className={`lang-btn ${i18n.language === 'fr' ? 'active' : ''}`}
            onClick={() => changeLanguage('fr')}
            title="Français"
          >
            🇫🇷
          </button>
          <button
            className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
            onClick={() => changeLanguage('en')}
            title="English"
          >
            🇬🇧
          </button>
          <button
            className={`lang-btn ${i18n.language === 'vi' ? 'active' : ''}`}
            onClick={() => changeLanguage('vi')}
            title="Tiếng Việt"
          >
            🇻🇳
          </button>
          <button
            className={`lang-btn ${i18n.language === 'es' ? 'active' : ''}`}
            onClick={() => changeLanguage('es')}
            title="Español"
          >
            🇪🇸
          </button>
          <button
            className={`lang-btn ${i18n.language === 'ko' ? 'active' : ''}`}
            onClick={() => changeLanguage('ko')}
            title="한국어"
          >
            🇰🇷
          </button>
          <button
            className={`lang-btn ${i18n.language === 'hi' ? 'active' : ''}`}
            onClick={() => changeLanguage('hi')}
            title="हिंदी"
          >
            🇮🇳
          </button>
        </div>

        <div className="presentation-screen">
          <h1 className="presentation-title">{t('presentation.welcome')}</h1>

          <p className="presentation-description">{t('presentation.description')}</p>

          <div className="presentation-section">
            <h2 className="section-title">{t('presentation.howToPlay')}</h2>
            <ul className="rules-list">
              <li>{t('presentation.rule1')}</li>
              <li>{t('presentation.rule2')}</li>
              <li>{t('presentation.rule3')}</li>
              <li>{t('presentation.rule4')}</li>
            </ul>
          </div>

          <div className="presentation-section">
            <h2 className="section-title">{t('presentation.features')}</h2>
            <ul className="features-list">
              <li>{t('presentation.feature1')}</li>
              <li>{t('presentation.feature2')}</li>
              <li>{t('presentation.feature3')}</li>
              <li>{t('presentation.feature4')}</li>
            </ul>
          </div>

          <Button text={t('presentation.letsPlay')} onClick={() => setShowPresentation(false)} />
        </div>
      </div>
    )
  }

  // Écran de sélection de difficulté
  if (!gameStarted) {
    return (
      <div className="app">
        <div className="language-selector">
          <button 
            className={`lang-btn ${i18n.language === 'fr' ? 'active' : ''}`}
            onClick={() => changeLanguage('fr')}
            title="Français"
          >
            🇫🇷
          </button>
          <button 
            className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
            onClick={() => changeLanguage('en')}
            title="English"
          >
            🇬🇧
          </button>
          <button 
            className={`lang-btn ${i18n.language === 'vi' ? 'active' : ''}`}
            onClick={() => changeLanguage('vi')}
            title="Tiếng Việt"
          >
            🇻🇳
          </button>
          <button 
            className={`lang-btn ${i18n.language === 'es' ? 'active' : ''}`}
            onClick={() => changeLanguage('es')}
            title="Español"
          >
            🇪🇸
          </button>
          <button 
            className={`lang-btn ${i18n.language === 'ko' ? 'active' : ''}`}
            onClick={() => changeLanguage('ko')}
            title="한국어"
          >
            🇰🇷
          </button>
          <button 
            className={`lang-btn ${i18n.language === 'hi' ? 'active' : ''}`}
            onClick={() => changeLanguage('hi')}
            title="हिंदी"
          >
            🇮🇳
          </button>
        </div>
        
        <Title text={t('title')} />
        
        <div className="start-screen">
          <h2 className="subtitle">{t('choosePairs')}</h2>
          
          <div className="difficulty-buttons">
            <button 
              className={`difficulty-btn ${numPairs === 4 ? 'selected' : ''}`}
              onClick={() => setNumPairs(4)}
            >
              <span className="pairs-number">{t('pairs', { count: 4 })}</span>
              <span className="cards-number">{t('cards', { count: 8 })}</span>
            </button>
            
            <button 
              className={`difficulty-btn ${numPairs === 6 ? 'selected' : ''}`}
              onClick={() => setNumPairs(6)}
            >
              <span className="pairs-number">{t('pairs', { count: 6 })}</span>
              <span className="cards-number">{t('cards', { count: 12 })}</span>
            </button>
            
            <button 
              className={`difficulty-btn ${numPairs === 8 ? 'selected' : ''}`}
              onClick={() => setNumPairs(8)}
            >
              <span className="pairs-number">{t('pairs', { count: 8 })}</span>
              <span className="cards-number">{t('cards', { count: 16 })}</span>
            </button>
          </div>
          
          <Button text={t('startGame')} onClick={() => initializeGame(numPairs)} />
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      <div className="language-selector">
        <button 
          className={`lang-btn ${i18n.language === 'fr' ? 'active' : ''}`}
          onClick={() => changeLanguage('fr')}
          title="Français"
        >
          🇫🇷
        </button>
        <button 
          className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
          onClick={() => changeLanguage('en')}
          title="English"
        >
          🇬🇧
        </button>
        <button 
          className={`lang-btn ${i18n.language === 'vi' ? 'active' : ''}`}
          onClick={() => changeLanguage('vi')}
          title="Tiếng Việt"
        >
          🇻🇳
        </button>
        <button 
          className={`lang-btn ${i18n.language === 'es' ? 'active' : ''}`}
          onClick={() => changeLanguage('es')}
          title="Español"
        >
          🇪🇸
        </button>
        <button 
          className={`lang-btn ${i18n.language === 'ko' ? 'active' : ''}`}
          onClick={() => changeLanguage('ko')}
          title="한국어"
        >
          🇰🇷
        </button>
        <button 
          className={`lang-btn ${i18n.language === 'hi' ? 'active' : ''}`}
          onClick={() => changeLanguage('hi')}
          title="हिंदी"
        >
          🇮🇳
        </button>
      </div>
      
      <Title text={t('title')} />
      
      <div className="game-info">
        <div className="moves-counter">
          {t('moves', { count: moves })}
        </div>
        <Button text={t('newGame')} onClick={backToMenu} />
      </div>

      {isGameWon && (
        <div className="victory-message">
          {t('victory', { count: moves })}
        </div>
      )}

      <div className="cards-grid">
        {cards.map((card) => (
          <Card
            key={card.id}
            value={card.value}
            isFlipped={card.isFlipped}
            isMatched={card.isMatched}
            onClick={() => handleCardClick(card.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default App

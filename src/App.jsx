
import { useState } from 'react'

function App() {
  const [showAnalysis, setShowAnalysis] = useState(false)
  const [analysisStep, setAnalysisStep] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowAnalysis(true)
    setAnalysisStep(1)
    
    setTimeout(() => setAnalysisStep(2), 1500)
    setTimeout(() => setAnalysisStep(3), 3000)
    setTimeout(() => {
      setShowAnalysis(false)
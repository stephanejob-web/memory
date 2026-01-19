import React, { useState } from 'react'
import Input from '../Input/Input'
import './SimpleForm.css'

interface FormErrors {
  name?: string
  email?: string
  password?: string
}

const SimpleForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,

    })
    // Efface l'erreur quand l'utilisateur tape
    if (errors[name as keyof FormErrors]) {
      setErrors({
        ...errors,
        [name]: undefined,
      })
    }
  }

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis'
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "L'email n'est pas valide"
    }

    if (!formData.password) {
      newErrors.password = 'Le mot de passe est requis'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Le mot de passe doit contenir au moins 6 caractères'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      console.log('Données du formulaire :', formData)
    }
  }

  return (
    <form className="simple-form" onSubmit={handleSubmit}>
      <Input
        label="Nom"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Entrez votre nom"
        error={errors.name}
      />
      <Input
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Entrez votre email"
        error={errors.email}
      />
      <Input
        label="Mot de passe"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Entrez votre mot de passe"
        error={errors.password}
      />
      <button type="submit">Envoyer</button>
    </form>
  )
}

export default SimpleForm

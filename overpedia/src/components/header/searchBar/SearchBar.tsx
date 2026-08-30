'use client'
import React, { useState } from 'react'

interface SearchBarProps {
  onSearchResults: (results: any[]) => void
}

export default function SearchBar({ onSearchResults }: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    return console.log(e)
  }

  return (
    <form onSubmit={handleSearch} className="flex gap-2">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Digite para pesquisar..."
        className="border p-2 rounded w-full"
      />
      <button 
        type="submit" 
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {loading ? 'Buscando...' : 'Pesquisar'}
      </button>
    </form>
  )
}

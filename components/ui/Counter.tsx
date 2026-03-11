"use client"

import { useEffect, useState } from "react"

export default function Counter({ value }: { value: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0
    const duration = 1500
    const stepTime = Math.abs(Math.floor(duration / value))

    const timer = setInterval(() => {
      start += 1
      setCount(start)

      if (start === value) clearInterval(timer)
    }, stepTime)

    return () => clearInterval(timer)
  }, [value])

  return <span>{count}</span>
}

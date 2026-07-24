import { useEffect, useState } from 'react'

export function useScrollSpy(selectors: string[], options?: IntersectionObserverInit) {
    const [activeId, setActiveId] = useState<string>('')

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id)
                }
            })
        }, options || { rootMargin: '-20% 0px -60% 0px' })

        selectors.forEach((selector) => {
            const element = document.querySelector(selector)
            if (element) observer.observe(element)
        })

        return () => {
            selectors.forEach((selector) => {
                const element = document.querySelector(selector)
                if (element) observer.unobserve(element)
            })
        }
    }, [selectors, options])

    return activeId
}

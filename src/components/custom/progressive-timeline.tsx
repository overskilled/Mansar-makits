"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export interface TimelineSection {
  id: string
  number: string
  title: string
  description: string
}

export interface ProgressiveTimelineProps {
  title: string
  sections: TimelineSection[]
  autoProgress?: boolean
  progressInterval?: number
  className?: string
  span: string
  onSectionChange?: (sectionId: string, index: number) => void
}

export function ProgressiveTimeline({
  title,
  sections,
  autoProgress = true,
  progressInterval = 4000,
  className,
  span,
  onSectionChange,
}: ProgressiveTimelineProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (!autoProgress) return

    setProgress(0)

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 100
        }
        return prev + 100 / (progressInterval / 50) // Update every 50ms
      })
    }, 50)

    const sectionTimer = setTimeout(() => {
      setActiveIndex((prev) => {
        const nextIndex = (prev + 1) % sections.length
        onSectionChange?.(sections[nextIndex].id, nextIndex)
        return nextIndex
      })
    }, progressInterval)

    return () => {
      clearInterval(progressTimer)
      clearTimeout(sectionTimer)
    }
  }, [activeIndex, autoProgress, progressInterval, sections, onSectionChange])

  const handleSectionClick = (index: number) => {
    setActiveIndex(index)
    setProgress(0)
    onSectionChange?.(sections[index].id, index)
  }

  return (
    <div className={cn("w-full my-[100px]", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tag/Span */}
        <span className="inline-block py-1 px-4 rounded-2xl text-center font-semibold text-xs sm:text-sm bg-[#141c34] text-[#171ca6]">
          {span}
        </span>

        {/* Main Title */}
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl mt-5 font-semibold text-white mb-12 leading-snug max-w-prose">
          {title}
        </h1>

        {/* Progress Bars */}
        <div className="flex gap-2 mb-10">
          {sections.map((_, index) => {
            const isActive = index === activeIndex
            const isPassed = index < activeIndex

            return (
              <div
                key={index}
                className={cn(
                  "h-1 transition-all duration-700 cursor-pointer relative overflow-hidden rounded-full",
                  isActive ? "flex-[2]" : "flex-1",
                  isPassed ? "bg-white" : "bg-white/20",
                )}
                onClick={() => handleSectionClick(index)}
              >
                {isActive && (
                  <div
                    className="absolute top-0 left-0 h-full bg-white transition-all duration-75 ease-linear rounded-full"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </div>
            )
          })}
        </div>

        {/* Sections Grid */}
        <div className="flex flex-col md:flex-row gap-6">
          {sections.map((section, index) => {
            const isActive = index === activeIndex
            const isPassed = index < activeIndex

            return (
              <div
                key={section.id}
                className={cn(
                  "transition-all duration-700 cursor-pointer",
                  isActive ? "flex-[2] opacity-100" : "flex-1 opacity-70 hover:opacity-85",
                )}
                onClick={() => handleSectionClick(index)}
              >
                {/* Section Number */}
                <div
                  className={cn(
                    "text-xs sm:text-sm font-medium mb-2 transition-colors duration-300",
                    isActive || isPassed ? "text-white" : "text-white/60",
                  )}
                >
                  {section.number}.
                </div>

                {/* Section Title */}
                <h3
                  className={cn(
                    "text-lg sm:text-xl font-medium mb-3 transition-colors duration-300",
                    isActive ? "text-white" : "text-white/80",
                  )}
                >
                  {section.title}
                </h3>

                {/* Section Description */}
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-500",
                    isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                  )}
                >
                  <p className="text-white/70 leading-relaxed text-sm sm:text-base max-w-prose">
                    {section.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

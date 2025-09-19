"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import Entete from "./Entete"

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
    span: string,
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
        <div className={cn("w-full my-[150px]", className)}>

            <span className={`py-1 px-4 rounded-2xl text-center font-semibold text-sm  bg-[#141c34] text-[#171ca6] `}>{span}</span>

            {/* Main Title */}
            <h1 className="text-2xl md:text-3xl mt-5 lg:text-4xl font-semibold text-white mb-16 leading-tight max-w-2xl">{title}</h1>

            {/* Progress Bars */}
            <div className="flex gap-2 mb-12">
                {sections.map((_, index) => {
                    const isActive = index === activeIndex
                    const isPassed = index < activeIndex

                    return (
                        <div
                            key={index}
                            className={cn(
                                "h-1 transition-all duration-700 cursor-pointer relative overflow-hidden rounded-full",
                                // Active bar takes more space (flex-[2]), others take normal space (flex-1)
                                isActive ? "flex-[2]" : "flex-1",
                                isPassed ? "bg-white" : "bg-white/20",
                            )}
                            onClick={() => handleSectionClick(index)}
                        >
                            {/* Filling animation for active bar */}
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
            <div className="flex gap-4">
                {sections.map((section, index) => {
                    const isActive = index === activeIndex
                    const isPassed = index < activeIndex

                    return (
                        <div
                            key={section.id}
                            className={cn(
                                "transition-all duration-700 cursor-pointer",
                                isActive ? "flex-[2] opacity-100" : "flex-1 opacity-60 hover:opacity-80",
                            )}
                            onClick={() => handleSectionClick(index)}
                        >
                            {/* Section Number */}
                            <div
                                className={cn(
                                    "text-sm font-medium mb-2 transition-colors duration-300",
                                    isActive || isPassed ? "text-white" : "text-white/60",
                                )}
                            >
                                {section.number}.
                            </div>

                            {/* Section Title */}
                            <h3
                                className={cn(
                                    "text-xl font-medium mb-4 transition-colors duration-300",
                                    isActive ? "text-white" : "text-white/80",
                                )}
                            >
                                {section.title}
                            </h3>

                            {/* Section Description - Only show for active section */}
                            <div
                                className={cn(
                                    "overflow-hidden transition-all duration-500",
                                    isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                                )}
                            >
                                <p className="text-white/70 leading-relaxed text-sm">{section.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}


import katex from 'katex';
import 'katex/dist/katex.min.css';

/**
 * Renders text containing LaTeX expressions delimited by $.
 * Example: "The formula is $\ce{H2O}$."
 * Supports mhchem \ce{} syntax if configured (requires katex/contrib/mhchem usually, but simple subscripts work with standard latex H_2O).
 * 
 * Note: KaTeX generic chemistry support is limited without mhchem, so we might stick to H_2O.
 * However, we can also use a simple regex replacer for "H2O" -> "H_2O" if we wanted, 
 * but explicit LaTeX is better.
 */

export const renderLatex = (text: string) => {
    if (!text) return "";

    // Simple regex to basic chemical formulas if not explicitly latex?
    // User asked to "convert".
    // Let's first look for explicit $...$ pattern.
    const parts = text.split(/(\$[^\$]+\$)/g);

    return parts.map((part, index) => {
        if (part.startsWith('$') && part.endsWith('$')) {
            const content = part.slice(1, -1);
            try {
                // Chemical formula support hack:
                // Use regular math mode matching for H_2O
                const html = katex.renderToString(content, {
                    throwOnError: false,
                    displayMode: false
                });
                return <span key={index} dangerouslySetInnerHTML={{ __html: html }} />;
            } catch (error) {
                console.error("KaTeX Error:", error);
                // Fallback: strip $ and render as is, maybe with simple subscript replacements
                const plain = content;
                const formatted = plain.replace(/_(\d+)/g, '<sub>$1</sub>').replace(/\^(\d+)/g, '<sup>$1</sup>');
                return <span key={index} dangerouslySetInnerHTML={{ __html: formatted }} />;
            }
        }

        // Auto-convert simple chemical formulas like H2O, CO2, H2SO4 to HTML subscripts if NOT inside latex
        // This regex looks for Capital letter followed by optional lower, followed by numbers
        // We replace with <sub>
        // Be careful not to replace numbers in normal text.
        // Heuristic: Letter + Number.
        const chemicalRegex = /([A-Z][a-z]?)(\d+)/g;
        // Basic Markdown-style bold: **text** -> <strong>text</strong>
        const boldRegex = /\*\*(.*?)\*\*/g;

        let formattedPart = part;
        // First bold
        formattedPart = formattedPart.replace(boldRegex, '<strong class="text-foreground font-bold">$1</strong>');
        // Then chemical formulas (careful not to break HTML tags, but simple replace should be ok if simplistic)
        formattedPart = formattedPart.replace(chemicalRegex, '$1<sub>$2</sub>');

        return <span key={index} dangerouslySetInnerHTML={{ __html: formattedPart }} />;
    });
};

import { Component, ReactNode } from 'react';

interface LatexProps {
    children: string;
}

export default function Latex({ children }: LatexProps) {
    return <>{renderLatex(children)}</>;
}

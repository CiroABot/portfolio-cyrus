import React from 'react';
import { Content, FilmFestival, FilmFestivals } from '../types';

// COMPONENT: "Festivais e Prêmios" box — shared by the Modal and the film page.
// Two sections (Brazil / international), each with a black kicker + dashed rule
// + count, premieres first. Premiere / award tags reuse the site's brutalist
// sticker language (black border + hard shadow): yellow = national premiere,
// teal = international premiere, rose = award. No hooks → works on server too.

const TAG = 'inline-block border-2 border-black px-1.5 py-[1px] font-mono text-[9px] md:text-[10px] font-bold uppercase leading-tight shadow-[2px_2px_0px_#000] whitespace-nowrap';

const FestivalGroup: React.FC<{
    label: string;
    items: FilmFestival[];
    premiereLabel: string;
    premiereClass: string;
    t: Content;
}> = ({ label, items, premiereLabel, premiereClass, t }) => (
    <div className="mt-4 first:mt-0">
        <div className="flex items-center gap-2 mb-2.5">
            <span className="bg-black text-white font-mono text-[10px] font-bold uppercase tracking-widest px-2 py-0.5">
                {label}
            </span>
            <span className="flex-1 border-t-2 border-dashed border-black/30" aria-hidden="true" />
            <span className="font-mono text-[10px] font-bold text-gray-500">{String(items.length).padStart(2, '0')}</span>
        </div>
        <ul className="space-y-2.5 text-sm font-semibold">
            {items.map((fest, i) => (
                <li key={i} className="flex items-start gap-2">
                    <span className="text-rose text-lg leading-none" aria-hidden="true">★</span>
                    <div className="leading-tight min-w-0">
                        <span>{fest.name}</span>
                        {(fest.premiere || fest.award) && (
                            <span className="flex flex-wrap gap-1.5 mt-1.5">
                                {fest.premiere && <span className={`${TAG} ${premiereClass}`}>{premiereLabel}</span>}
                                {fest.award && (
                                    <span className={`${TAG} bg-rose text-black`}>
                                        {t.fest_award}: {fest.award}
                                    </span>
                                )}
                            </span>
                        )}
                        {fest.note && (
                            <span className="block mt-1 font-mono text-[10px] md:text-[11px] font-normal uppercase tracking-wide text-gray-600">
                                {fest.note}
                            </span>
                        )}
                    </div>
                </li>
            ))}
        </ul>
    </div>
);

const FestivalList: React.FC<{
    festivals: FilmFestivals;
    t: Content;
    /** Box background — the modal sits on white, so it uses a light grey. */
    className?: string;
    headingLevel?: 'h2' | 'h4';
}> = ({ festivals, t, className = 'bg-white', headingLevel = 'h2' }) => {
    const Heading = headingLevel;
    return (
        <div className={`mb-8 border-2 border-black p-4 shadow-pop-sm ${className}`}>
            <Heading className="font-bold uppercase border-b-2 border-black mb-4 pb-1">{t.modal_festivals}</Heading>
            {festivals.national.length > 0 && (
                <FestivalGroup
                    label={t.fest_national}
                    items={festivals.national}
                    premiereLabel={t.hl_premiere_national}
                    premiereClass="bg-yellow text-black"
                    t={t}
                />
            )}
            {festivals.international.length > 0 && (
                <FestivalGroup
                    label={t.fest_international}
                    items={festivals.international}
                    premiereLabel={t.hl_premiere_international}
                    premiereClass="bg-teal text-black"
                    t={t}
                />
            )}
        </div>
    );
};

export default FestivalList;

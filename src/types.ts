export type ProjectObjectProps = {
    name: string;
    description: string;
    imageUrl: string;
    jumpIdDesktop: string;
    jumpIdMobile: string;
}

export type ProjectTimelineObjectDesktopProps = {
    name: string;
    date: string;
    description: string;
    tools: string;
    jumpIdDesktop: string;
    img: {
        url: string;
        alt: string;
    }[];
    imgPattern: number[];
    link: {
        url: string;
        buttonName: string;
    }[];
}

export type ProjectTimelineObjectMobileProps = {
    name: string;
    date: string;
    description: string;
    tools: string;
    jumpIdMobile: string;
    img: {
        url: string;
        alt: string;
    }[];
    link: {
        url: string;
        buttonName: string;
    }[];
}

export type SkillsObjectProps = {
    name: string;
    description: {
        imgUrl: string,
        alt: string,
        name: string
    }[];
}

export type AwardObjectProps = {
    name: string,
    date: string,
    description: string,
    img: {
        url: string,
        alt: string
    }[]
}

export type ProjectTimelineImageDesktopProps = {
    img: {
        url: string;
        alt: string;
    }[];
    count: number;
    startIndex: number;
    colIndex: number;
}

export type ProjectTimelineImageMobileProps = {
    url: string;
    alt: string;
}

export type AwardImageDesktopProps = {
    url: string;
    alt: string;
}

export type AwardImageMobileProps = {
    url: string;
    alt: string;
}
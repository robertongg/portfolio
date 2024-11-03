export interface IAboutMe {
    header: string,
    text: string
}

export interface IExperience {
    type: string,
    school: string | null,
    company: string | null,
    location: string,
    logo: string,
    position: string | null,
    title: string | null,
    from: string,
    to?: string,
    description: string[],
    projects: string[],
    topPosition: number,
    stickyHeight: number
}

export interface IContact {
    email: string,
    linkedin: string
}

export interface IAchievements {
    title: string,
    associate: string,
    logo: string,
    date: string,
    description: string | null
}

export interface ISkills {
    category: string,
    items: ISkillItems[]
}

export interface ISkillItems {
    title: string,
    logo: string
}
export interface IAboutMe {
    header: string,
    text: string
}

export interface IProject {
    name: string,
    description: string,
    from: string,
    to?: string,
    thumbnail: string
}

export interface IExperience {
    type: string,
    institution: string,
    location: string,
    logo: string,
    title: string | null,
    from: string,
    to?: string,
    description: string[],
    projects: IProject[],
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
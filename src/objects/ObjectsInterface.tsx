export interface IProjectImage {
    imageDesc?: string,
    imageSrc: string
}

export interface IProject {
    id: string,
    name: string,
    description: string,
    from: string,
    to?: string,
    role?: string[],
    tools?: string[],
    images?: IProjectImage[]
}

export interface IExperience {
    id: string,
    type: string,
    title: string,
    institution: string,
    location: string,
    logo: string,
    logoSrc?: string,
    from: string,
    to?: string,
    description: string[],
    projects: IProject[]
}

export interface IContact {
    email: string,
    linkedin: string
}

export interface IAchievements {
    title: string,
    associate: string,
    logo: string,
    logoSrc?: string,
    date: string,
    description: string | null
}

export interface ISkills {
    category: string,
    items: string[]
}
import { CATEGORIES } from "./categories";
import { TAGS } from "./tags";

export interface ENTRY {
    entryId: string
    content: string
    created: CREATED
    updated: UPDATED
    frontMatter: FRONT_MATTER
}

interface CREATED {
    name: string
    date: string
}

interface UPDATED {
    name: string
    date: string
}

interface FRONT_MATTER {
    title: string
    categories: CATEGORIES
    tags: TAGS
}
const VERSION = "v1"

const API_ROOT = ``

const domain = (domain: string, root: string = API_ROOT) => `${root}/${domain}`

export const NOTION_ROOT = ``

export const notionWithId = (id: string) => `${NOTION_ROOT}/${id}`

const api = {
  index: domain(""),

  arts: {
    index: domain("arts"),
    all: domain("portfolios/all"),
    search: domain("arts/search"),
    projects: {
      index: domain("arts/projects"),
      contents: domain("arts/projects/contents"),
    },
  },

  techs: {
    index: domain("techs"),
    contents: domain("techs/contents"),
    search: domain("techs/search"),
  },

  portfolios: {
    index: domain("portfolios"),
    contents: domain("portfolios/contents"),
    search: domain("portfolios/search"),
  },

  news: {
    index: domain("news"),
    all: domain("news/all"),
    search: domain("news/search"),
  },

  core: {
    triplet: domain("core/triplet"),
    contacts: domain("core/contacts"),
  },
}

export default api

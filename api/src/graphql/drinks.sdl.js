export const schema = gql`
  type Drink {
    id: Int!
    name: String!
    slug: String!
    description: String
    category: String!
    priceCents: Int!
    abv: Float
    ingredients: [String!]!
    isFeatured: Boolean!
    isActive: Boolean!
    sortOrder: Int!
    iconKey: String
    imageUrl: String
    tags: [String!]!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    # Admin queries - require auth
    drinks: [Drink!]! @requireAuth
    drink(id: Int!): Drink @requireAuth

    # Public query for menu (no auth required, only active drinks)
    menuDrinks(category: String): [Drink!]! @skipAuth
    drinkCategories: [String!]! @skipAuth
  }

  input CreateDrinkInput {
    name: String!
    slug: String!
    description: String
    category: String!
    priceCents: Int
    abv: Float
    ingredients: [String!]!
    isFeatured: Boolean
    isActive: Boolean
    sortOrder: Int
    iconKey: String
    imageUrl: String
    tags: [String!]
  }

  input UpdateDrinkInput {
    name: String
    slug: String
    description: String
    category: String
    priceCents: Int
    abv: Float
    ingredients: [String!]
    isFeatured: Boolean
    isActive: Boolean
    sortOrder: Int
    iconKey: String
    imageUrl: String
    tags: [String!]
  }

  type Mutation {
    createDrink(input: CreateDrinkInput!): Drink! @requireAuth(roles: ["admin"])
    updateDrink(id: Int!, input: UpdateDrinkInput!): Drink! @requireAuth(roles: ["admin"])
    deleteDrink(id: Int!): Drink! @requireAuth(roles: ["admin"])
  }
`

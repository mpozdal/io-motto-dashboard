/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      email
      orders {
        items {
          id
          total
          status
          createdAt
          updatedAt
          userOrdersId
          orderUserId
          orderStoreId
          __typename
        }
        nextToken
        __typename
      }
      defaultStore {
        id
        address
        latitude
        longtitude
        openingHour
        closingHour
        createdAt
        updatedAt
        __typename
      }
      role {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userDefaultStoreId
      userRoleId
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      email
      orders {
        items {
          id
          total
          status
          createdAt
          updatedAt
          userOrdersId
          orderUserId
          orderStoreId
          __typename
        }
        nextToken
        __typename
      }
      defaultStore {
        id
        address
        latitude
        longtitude
        openingHour
        closingHour
        createdAt
        updatedAt
        __typename
      }
      role {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userDefaultStoreId
      userRoleId
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      email
      orders {
        items {
          id
          total
          status
          createdAt
          updatedAt
          userOrdersId
          orderUserId
          orderStoreId
          __typename
        }
        nextToken
        __typename
      }
      defaultStore {
        id
        address
        latitude
        longtitude
        openingHour
        closingHour
        createdAt
        updatedAt
        __typename
      }
      role {
        id
        name
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      userDefaultStoreId
      userRoleId
      __typename
    }
  }
`;
export const createRole = /* GraphQL */ `
  mutation CreateRole(
    $input: CreateRoleInput!
    $condition: ModelRoleConditionInput
  ) {
    createRole(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateRole = /* GraphQL */ `
  mutation UpdateRole(
    $input: UpdateRoleInput!
    $condition: ModelRoleConditionInput
  ) {
    updateRole(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteRole = /* GraphQL */ `
  mutation DeleteRole(
    $input: DeleteRoleInput!
    $condition: ModelRoleConditionInput
  ) {
    deleteRole(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createStore = /* GraphQL */ `
  mutation CreateStore(
    $input: CreateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    createStore(input: $input, condition: $condition) {
      id
      address
      latitude
      longtitude
      openingHour
      closingHour
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateStore = /* GraphQL */ `
  mutation UpdateStore(
    $input: UpdateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    updateStore(input: $input, condition: $condition) {
      id
      address
      latitude
      longtitude
      openingHour
      closingHour
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteStore = /* GraphQL */ `
  mutation DeleteStore(
    $input: DeleteStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    deleteStore(input: $input, condition: $condition) {
      id
      address
      latitude
      longtitude
      openingHour
      closingHour
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      name
      drinks {
        items {
          id
          name
          description
          price
          createdAt
          updatedAt
          categoryDrinksId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      name
      drinks {
        items {
          id
          name
          description
          price
          createdAt
          updatedAt
          categoryDrinksId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      name
      drinks {
        items {
          id
          name
          description
          price
          createdAt
          updatedAt
          categoryDrinksId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createOrderItem = /* GraphQL */ `
  mutation CreateOrderItem(
    $input: CreateOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    createOrderItem(input: $input, condition: $condition) {
      id
      drink {
        id
        name
        description
        price
        sizes {
          nextToken
          __typename
        }
        flavorShots {
          nextToken
          __typename
        }
        milks {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        categoryDrinksId
        __typename
      }
      milk {
        id
        name
        createdAt
        updatedAt
        drinkMilksId
        __typename
      }
      size {
        id
        value
        extraCost
        createdAt
        updatedAt
        drinkSizesId
        __typename
      }
      flavorShots {
        items {
          id
          name
          extraCost
          createdAt
          updatedAt
          orderItemFlavorShotsId
          drinkFlavorShotsId
          __typename
        }
        nextToken
        __typename
      }
      price
      createdAt
      updatedAt
      orderItemsId
      orderItemMilkId
      orderItemSizeId
      __typename
    }
  }
`;
export const updateOrderItem = /* GraphQL */ `
  mutation UpdateOrderItem(
    $input: UpdateOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    updateOrderItem(input: $input, condition: $condition) {
      id
      drink {
        id
        name
        description
        price
        sizes {
          nextToken
          __typename
        }
        flavorShots {
          nextToken
          __typename
        }
        milks {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        categoryDrinksId
        __typename
      }
      milk {
        id
        name
        createdAt
        updatedAt
        drinkMilksId
        __typename
      }
      size {
        id
        value
        extraCost
        createdAt
        updatedAt
        drinkSizesId
        __typename
      }
      flavorShots {
        items {
          id
          name
          extraCost
          createdAt
          updatedAt
          orderItemFlavorShotsId
          drinkFlavorShotsId
          __typename
        }
        nextToken
        __typename
      }
      price
      createdAt
      updatedAt
      orderItemsId
      orderItemMilkId
      orderItemSizeId
      __typename
    }
  }
`;
export const deleteOrderItem = /* GraphQL */ `
  mutation DeleteOrderItem(
    $input: DeleteOrderItemInput!
    $condition: ModelOrderItemConditionInput
  ) {
    deleteOrderItem(input: $input, condition: $condition) {
      id
      drink {
        id
        name
        description
        price
        sizes {
          nextToken
          __typename
        }
        flavorShots {
          nextToken
          __typename
        }
        milks {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        categoryDrinksId
        __typename
      }
      milk {
        id
        name
        createdAt
        updatedAt
        drinkMilksId
        __typename
      }
      size {
        id
        value
        extraCost
        createdAt
        updatedAt
        drinkSizesId
        __typename
      }
      flavorShots {
        items {
          id
          name
          extraCost
          createdAt
          updatedAt
          orderItemFlavorShotsId
          drinkFlavorShotsId
          __typename
        }
        nextToken
        __typename
      }
      price
      createdAt
      updatedAt
      orderItemsId
      orderItemMilkId
      orderItemSizeId
      __typename
    }
  }
`;
export const createOrder = /* GraphQL */ `
  mutation CreateOrder(
    $input: CreateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    createOrder(input: $input, condition: $condition) {
      id
      user {
        id
        name
        email
        orders {
          nextToken
          __typename
        }
        defaultStore {
          id
          address
          latitude
          longtitude
          openingHour
          closingHour
          createdAt
          updatedAt
          __typename
        }
        role {
          id
          name
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        userDefaultStoreId
        userRoleId
        __typename
      }
      items {
        items {
          id
          price
          createdAt
          updatedAt
          orderItemsId
          orderItemMilkId
          orderItemSizeId
          __typename
        }
        nextToken
        __typename
      }
      store {
        id
        address
        latitude
        longtitude
        openingHour
        closingHour
        createdAt
        updatedAt
        __typename
      }
      total
      status
      createdAt
      updatedAt
      userOrdersId
      orderUserId
      orderStoreId
      __typename
    }
  }
`;
export const updateOrder = /* GraphQL */ `
  mutation UpdateOrder(
    $input: UpdateOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    updateOrder(input: $input, condition: $condition) {
      id
      user {
        id
        name
        email
        orders {
          nextToken
          __typename
        }
        defaultStore {
          id
          address
          latitude
          longtitude
          openingHour
          closingHour
          createdAt
          updatedAt
          __typename
        }
        role {
          id
          name
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        userDefaultStoreId
        userRoleId
        __typename
      }
      items {
        items {
          id
          price
          createdAt
          updatedAt
          orderItemsId
          orderItemMilkId
          orderItemSizeId
          __typename
        }
        nextToken
        __typename
      }
      store {
        id
        address
        latitude
        longtitude
        openingHour
        closingHour
        createdAt
        updatedAt
        __typename
      }
      total
      status
      createdAt
      updatedAt
      userOrdersId
      orderUserId
      orderStoreId
      __typename
    }
  }
`;
export const deleteOrder = /* GraphQL */ `
  mutation DeleteOrder(
    $input: DeleteOrderInput!
    $condition: ModelOrderConditionInput
  ) {
    deleteOrder(input: $input, condition: $condition) {
      id
      user {
        id
        name
        email
        orders {
          nextToken
          __typename
        }
        defaultStore {
          id
          address
          latitude
          longtitude
          openingHour
          closingHour
          createdAt
          updatedAt
          __typename
        }
        role {
          id
          name
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        userDefaultStoreId
        userRoleId
        __typename
      }
      items {
        items {
          id
          price
          createdAt
          updatedAt
          orderItemsId
          orderItemMilkId
          orderItemSizeId
          __typename
        }
        nextToken
        __typename
      }
      store {
        id
        address
        latitude
        longtitude
        openingHour
        closingHour
        createdAt
        updatedAt
        __typename
      }
      total
      status
      createdAt
      updatedAt
      userOrdersId
      orderUserId
      orderStoreId
      __typename
    }
  }
`;
export const createDrink = /* GraphQL */ `
  mutation CreateDrink(
    $input: CreateDrinkInput!
    $condition: ModelDrinkConditionInput
  ) {
    createDrink(input: $input, condition: $condition) {
      id
      name
      description
      price
      sizes {
        items {
          id
          value
          extraCost
          createdAt
          updatedAt
          drinkSizesId
          __typename
        }
        nextToken
        __typename
      }
      flavorShots {
        items {
          id
          name
          extraCost
          createdAt
          updatedAt
          orderItemFlavorShotsId
          drinkFlavorShotsId
          __typename
        }
        nextToken
        __typename
      }
      milks {
        items {
          id
          name
          createdAt
          updatedAt
          drinkMilksId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      categoryDrinksId
      __typename
    }
  }
`;
export const updateDrink = /* GraphQL */ `
  mutation UpdateDrink(
    $input: UpdateDrinkInput!
    $condition: ModelDrinkConditionInput
  ) {
    updateDrink(input: $input, condition: $condition) {
      id
      name
      description
      price
      sizes {
        items {
          id
          value
          extraCost
          createdAt
          updatedAt
          drinkSizesId
          __typename
        }
        nextToken
        __typename
      }
      flavorShots {
        items {
          id
          name
          extraCost
          createdAt
          updatedAt
          orderItemFlavorShotsId
          drinkFlavorShotsId
          __typename
        }
        nextToken
        __typename
      }
      milks {
        items {
          id
          name
          createdAt
          updatedAt
          drinkMilksId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      categoryDrinksId
      __typename
    }
  }
`;
export const deleteDrink = /* GraphQL */ `
  mutation DeleteDrink(
    $input: DeleteDrinkInput!
    $condition: ModelDrinkConditionInput
  ) {
    deleteDrink(input: $input, condition: $condition) {
      id
      name
      description
      price
      sizes {
        items {
          id
          value
          extraCost
          createdAt
          updatedAt
          drinkSizesId
          __typename
        }
        nextToken
        __typename
      }
      flavorShots {
        items {
          id
          name
          extraCost
          createdAt
          updatedAt
          orderItemFlavorShotsId
          drinkFlavorShotsId
          __typename
        }
        nextToken
        __typename
      }
      milks {
        items {
          id
          name
          createdAt
          updatedAt
          drinkMilksId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      categoryDrinksId
      __typename
    }
  }
`;
export const createSize = /* GraphQL */ `
  mutation CreateSize(
    $input: CreateSizeInput!
    $condition: ModelSizeConditionInput
  ) {
    createSize(input: $input, condition: $condition) {
      id
      value
      extraCost
      createdAt
      updatedAt
      drinkSizesId
      __typename
    }
  }
`;
export const updateSize = /* GraphQL */ `
  mutation UpdateSize(
    $input: UpdateSizeInput!
    $condition: ModelSizeConditionInput
  ) {
    updateSize(input: $input, condition: $condition) {
      id
      value
      extraCost
      createdAt
      updatedAt
      drinkSizesId
      __typename
    }
  }
`;
export const deleteSize = /* GraphQL */ `
  mutation DeleteSize(
    $input: DeleteSizeInput!
    $condition: ModelSizeConditionInput
  ) {
    deleteSize(input: $input, condition: $condition) {
      id
      value
      extraCost
      createdAt
      updatedAt
      drinkSizesId
      __typename
    }
  }
`;
export const createFlavorShot = /* GraphQL */ `
  mutation CreateFlavorShot(
    $input: CreateFlavorShotInput!
    $condition: ModelFlavorShotConditionInput
  ) {
    createFlavorShot(input: $input, condition: $condition) {
      id
      name
      extraCost
      createdAt
      updatedAt
      orderItemFlavorShotsId
      drinkFlavorShotsId
      __typename
    }
  }
`;
export const updateFlavorShot = /* GraphQL */ `
  mutation UpdateFlavorShot(
    $input: UpdateFlavorShotInput!
    $condition: ModelFlavorShotConditionInput
  ) {
    updateFlavorShot(input: $input, condition: $condition) {
      id
      name
      extraCost
      createdAt
      updatedAt
      orderItemFlavorShotsId
      drinkFlavorShotsId
      __typename
    }
  }
`;
export const deleteFlavorShot = /* GraphQL */ `
  mutation DeleteFlavorShot(
    $input: DeleteFlavorShotInput!
    $condition: ModelFlavorShotConditionInput
  ) {
    deleteFlavorShot(input: $input, condition: $condition) {
      id
      name
      extraCost
      createdAt
      updatedAt
      orderItemFlavorShotsId
      drinkFlavorShotsId
      __typename
    }
  }
`;
export const createMilk = /* GraphQL */ `
  mutation CreateMilk(
    $input: CreateMilkInput!
    $condition: ModelMilkConditionInput
  ) {
    createMilk(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      drinkMilksId
      __typename
    }
  }
`;
export const updateMilk = /* GraphQL */ `
  mutation UpdateMilk(
    $input: UpdateMilkInput!
    $condition: ModelMilkConditionInput
  ) {
    updateMilk(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      drinkMilksId
      __typename
    }
  }
`;
export const deleteMilk = /* GraphQL */ `
  mutation DeleteMilk(
    $input: DeleteMilkInput!
    $condition: ModelMilkConditionInput
  ) {
    deleteMilk(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
      drinkMilksId
      __typename
    }
  }
`;

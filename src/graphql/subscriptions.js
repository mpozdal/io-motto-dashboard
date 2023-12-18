/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateRole = /* GraphQL */ `
  subscription OnCreateRole($filter: ModelSubscriptionRoleFilterInput) {
    onCreateRole(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateRole = /* GraphQL */ `
  subscription OnUpdateRole($filter: ModelSubscriptionRoleFilterInput) {
    onUpdateRole(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteRole = /* GraphQL */ `
  subscription OnDeleteRole($filter: ModelSubscriptionRoleFilterInput) {
    onDeleteRole(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateStore = /* GraphQL */ `
  subscription OnCreateStore($filter: ModelSubscriptionStoreFilterInput) {
    onCreateStore(filter: $filter) {
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
export const onUpdateStore = /* GraphQL */ `
  subscription OnUpdateStore($filter: ModelSubscriptionStoreFilterInput) {
    onUpdateStore(filter: $filter) {
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
export const onDeleteStore = /* GraphQL */ `
  subscription OnDeleteStore($filter: ModelSubscriptionStoreFilterInput) {
    onDeleteStore(filter: $filter) {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
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
export const onCreateOrderItem = /* GraphQL */ `
  subscription OnCreateOrderItem(
    $filter: ModelSubscriptionOrderItemFilterInput
  ) {
    onCreateOrderItem(filter: $filter) {
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
export const onUpdateOrderItem = /* GraphQL */ `
  subscription OnUpdateOrderItem(
    $filter: ModelSubscriptionOrderItemFilterInput
  ) {
    onUpdateOrderItem(filter: $filter) {
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
export const onDeleteOrderItem = /* GraphQL */ `
  subscription OnDeleteOrderItem(
    $filter: ModelSubscriptionOrderItemFilterInput
  ) {
    onDeleteOrderItem(filter: $filter) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onCreateOrder(filter: $filter) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($filter: ModelSubscriptionOrderFilterInput) {
    onUpdateOrder(filter: $filter) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($filter: ModelSubscriptionOrderFilterInput) {
    onDeleteOrder(filter: $filter) {
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
export const onCreateDrink = /* GraphQL */ `
  subscription OnCreateDrink($filter: ModelSubscriptionDrinkFilterInput) {
    onCreateDrink(filter: $filter) {
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
export const onUpdateDrink = /* GraphQL */ `
  subscription OnUpdateDrink($filter: ModelSubscriptionDrinkFilterInput) {
    onUpdateDrink(filter: $filter) {
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
export const onDeleteDrink = /* GraphQL */ `
  subscription OnDeleteDrink($filter: ModelSubscriptionDrinkFilterInput) {
    onDeleteDrink(filter: $filter) {
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
export const onCreateSize = /* GraphQL */ `
  subscription OnCreateSize($filter: ModelSubscriptionSizeFilterInput) {
    onCreateSize(filter: $filter) {
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
export const onUpdateSize = /* GraphQL */ `
  subscription OnUpdateSize($filter: ModelSubscriptionSizeFilterInput) {
    onUpdateSize(filter: $filter) {
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
export const onDeleteSize = /* GraphQL */ `
  subscription OnDeleteSize($filter: ModelSubscriptionSizeFilterInput) {
    onDeleteSize(filter: $filter) {
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
export const onCreateFlavorShot = /* GraphQL */ `
  subscription OnCreateFlavorShot(
    $filter: ModelSubscriptionFlavorShotFilterInput
  ) {
    onCreateFlavorShot(filter: $filter) {
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
export const onUpdateFlavorShot = /* GraphQL */ `
  subscription OnUpdateFlavorShot(
    $filter: ModelSubscriptionFlavorShotFilterInput
  ) {
    onUpdateFlavorShot(filter: $filter) {
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
export const onDeleteFlavorShot = /* GraphQL */ `
  subscription OnDeleteFlavorShot(
    $filter: ModelSubscriptionFlavorShotFilterInput
  ) {
    onDeleteFlavorShot(filter: $filter) {
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
export const onCreateMilk = /* GraphQL */ `
  subscription OnCreateMilk($filter: ModelSubscriptionMilkFilterInput) {
    onCreateMilk(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      drinkMilksId
      __typename
    }
  }
`;
export const onUpdateMilk = /* GraphQL */ `
  subscription OnUpdateMilk($filter: ModelSubscriptionMilkFilterInput) {
    onUpdateMilk(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      drinkMilksId
      __typename
    }
  }
`;
export const onDeleteMilk = /* GraphQL */ `
  subscription OnDeleteMilk($filter: ModelSubscriptionMilkFilterInput) {
    onDeleteMilk(filter: $filter) {
      id
      name
      createdAt
      updatedAt
      drinkMilksId
      __typename
    }
  }
`;

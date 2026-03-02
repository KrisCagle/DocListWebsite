const database = {
    docks: [
        { id: 1, location: "Shanghai, China", volume: 43.5 },
        { id: 2, location: "Busan, South Korea", volume: 21.6 },
        { id: 3, location: "Rotterdam, The Netherlands", volume: 14.35 },
        { id: 4, location: "Antwerp, Belgium", volume: 12.04 },
    ],
    haulers: [
        {id: 1, name: "Pioneering Spirit", dockId: 1},
        {id: 2, name: "Boaty McBoatface", dockId: 2},
        {id: 3, name: "Seawise Giant", dockId: 3},
        {id: 4, name: "Not Titanic", dockId: 4},
        {id: 5, name: "Big Deborah", dockId: 1},
        {id: 6, name: "I Can't Swim", dockId: 2},

    ],
    shippingShips: [
        {id: 1, name: "Esso Atlantic", haulerId: 1 },
        {id: 2, name: "Prairial", haulerId: 2 },
        {id: 3, name: "Palais Royal", haulerId: 3 },
        {id: 4, name: "Rivoli", haulerId: 4 },
        {id: 5, name: "Champ Elysee", haulerId: 6},
        {id: 6, name: "Ever Ace", haulerId: 1},
        {id: 7, name: "Nissei Maru", haulerId: 2},
        {id: 8, name: "MSC Gulsun", haulerId: 3},
        {id: 9, name: "HMM Rotterdam", haulerId: 4},
        {id: 10, name: "CMA CGM Trocadero", haulerId: 5}, 

    ]
}
export const getDocks = () => {
    return [...database.docks];
}
export const getHaulingShips = () => {
    return [...database.haulers];
}
export const getShippingShips = () => {
    return [...database.shippingShips];
}
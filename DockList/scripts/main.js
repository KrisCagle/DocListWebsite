import { getDocks, getHaulingShips, getShippingShips } from "./database.js"

const container = document.querySelector("#container")

// ---------- Lists ----------
const DockList = () => {
  const docks = getDocks()
  let html = "<ul>"

  for (const dock of docks) {
    html += `<li data-type="dock" data-id="${dock.id}">${dock.location} (Capacity: ${dock.volume} million tons)</li>`
  }

  html += "</ul>"
  return html
}

const HaulerList = () => {
  const haulers = getHaulingShips()
  let html = "<ul>"

  for (const hauler of haulers) {
    html += `<li data-type="hauler" data-id="${hauler.id}">${hauler.name}</li>`
  }

  html += "</ul>"
  return html
}

const ShippingShipList = () => {
  const ships = getShippingShips()
  let html = "<ul>"

  for (const ship of ships) {
    html += `<li data-type="shippingShip" data-name="${ship.name}" data-hauler-id="${ship.haulerId}">${ship.name}</li>`
  }

  html += "</ul>"
  return html
}

// ---------- Render ----------
const render = () => {
  container.innerHTML = `
    <section class="list">
      <h2>Docks</h2>
      ${DockList()}
    </section>

    <section class="list">
      <h2>Hauling Ships</h2>
      ${HaulerList()}
    </section>

    <section class="list">
      <h2>Shipping Ships</h2>
      ${ShippingShipList()}
    </section>
  `
}

render()

// ---------- Click: hauler cargo count ----------
document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target

  if (itemClicked.dataset.type === "hauler") {
    const haulerId = Number(itemClicked.dataset.id)

    let shipCounter = 0
    for (const ship of getShippingShips()) {
      if (ship.haulerId === haulerId) {
        shipCounter++
      }
    }
document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target

  // Was a shipping ship list item clicked?
  if (itemClicked.dataset.type === "shippingShip") {

    // Get the haulerId value of the shipping ship clicked
    const haulerId = Number(itemClicked.dataset.haulerId)

    // Get the name of the shipping ship clicked
    const shipName = itemClicked.dataset.name

    // Define a default object for the found hauler
    let haulingShip = { name: "Incorrect" }

    // Iterate the array of hauler objects
    for (const hauler of getHaulingShips()) {

      // Does the haulerId foreign key match the id of the current hauler?
      if (hauler.id === haulerId) {

        // Reassign the value of `haulingShip` to the current hauler
        haulingShip = hauler
      }
    }

    // Show an alert
    window.alert(`${shipName} is being hauled by ${haulingShip.name}`)
  }
})
    window.alert(`This hauler is carrying ${shipCounter} shipping ships.`)
  }
})
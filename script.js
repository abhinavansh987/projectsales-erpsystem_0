// Sample Data (simulated database)
const employees = [
  { id: 1, name: "Alice Yadav", role: "Manager", department: "Sales" },
  { id: 2, name: "Aman Singh", role: "Engineer", department: "IT" },
  { id: 3, name: "Carol White", role: "HR Specialist", department: "HR" }
];

const inventory = [
  { id: 101, item: "Laptop", stock: 25, price: 800 },
  { id: 102, item: "Keyboard", stock: 100, price: 20 },
  { id: 103, item: "Monitor", stock: 40, price: 150 }
];

const sales = [
  { id: 201, item: "Laptop", quantity: 3, total: 2400 },
  { id: 202, item: "Monitor", quantity: 5, total: 750 }
];

// Navigation Function
function showSection(sectionId) {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(sectionId).classList.add("active");

  if (sectionId === "dashboard") loadDashboard();
  if (sectionId === "employees") loadEmployees();
  if (sectionId === "inventory") loadInventory();
  if (sectionId === "sales") loadSales();
  if (sectionId === "reports") loadReports();
}

// Loaders
function loadDashboard() {
  const dashboard = document.getElementById("dashboard-content");
  dashboard.innerHTML = `
    <p>Total Employees: ${employees.length}</p>
    <p>Total Inventory Items: ${inventory.length}</p>
    <p>Total Sales Records: ${sales.length}</p>
  `;
}

function loadEmployees() {
  const table = document.getElementById("employee-table");
  table.innerHTML = `
    <tr><th>ID</th><th>Name</th><th>Role</th><th>Department</th></tr>
    ${employees.map(e => `<tr><td>${e.id}</td><td>${e.name}</td><td>${e.role}</td><td>${e.department}</td></tr>`).join("")}
  `;
}

function loadInventory() {
  const table = document.getElementById("inventory-table");
  table.innerHTML = `
    <tr><th>ID</th><th>Item</th><th>Stock</th><th>Price</th></tr>
    ${inventory.map(i => `<tr><td>${i.id}</td><td>${i.item}</td><td>${i.stock}</td><td>$${i.price}</td></tr>`).join("")}
  `;
}

function loadSales() {
  const table = document.getElementById("sales-table");
  table.innerHTML = `
    <tr><th>ID</th><th>Item</th><th>Quantity</th><th>Total</th></tr>
    ${sales.map(s => `<tr><td>${s.id}</td><td>${s.item}</td><td>${s.quantity}</td><td>$${s.total}</td></tr>`).join("")}
  `;
}

function loadReports() {
  const totalRevenue = sales.reduce((sum, s) => sum + s.total, 0);
  const report = document.getElementById("report-content");
  report.innerHTML = `
    <h3>Summary Report</h3>
    <p>Total Revenue: $${totalRevenue}</p>
    <p>Average Item Price: $${(inventory.reduce((sum, i) => sum + i.price, 0) / inventory.length).toFixed(2)}</p>
  `;
}

// Load initial section
showSection("dashboard");

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InventoryWebAPI.Model
{
    public class Purchase
    {

        public int PurchaseId { get; set; }

        public DateTime Date { get; set; }

        public string CategoryName { get; set; }

        public string ProductName { get; set; }

        public double CostPrice { get; set; }

        public int Quantity { get; set; }

        public string SupplierName { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InventoryWebAPI.Model
{
    public class Order
    {
        public int OrderId { get; set; }

        public DateTime Date { get; set; }

        public string CategoryName { get; set; }

        public string ProductName { get; set; }

        public int Quantity { get; set; }

        public double SalePrice { get; set; }

        public string CustomerName { get; set; }
    }
}

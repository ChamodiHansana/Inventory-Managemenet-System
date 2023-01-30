using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InventoryWebAPI.Model
{
    public class Product
    {

        public int ProductId { get; set; }

        public string ProductName { get; set; }

        public string ProductDesc { get; set; }

        public string ProductCategory { get; set; }

        public double CostPrice { get; set; }

        public double SalePrice { get; set; }

        public string Status { get; set; }
    }
}

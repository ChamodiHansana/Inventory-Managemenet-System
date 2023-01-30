using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace InventoryWebAPI.Model
{
    public class CategoryModel
    {
        public int CategoryId { get; set; }

        public string CategoryName { get; set; }

        public string Parent { get; set; }

        public string Status { get; set; }
    }
}

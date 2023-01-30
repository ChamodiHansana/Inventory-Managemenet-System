using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace InventoryWebAPI.Model
{
    public class Category
    {
        [Key]
        [Column(TypeName = "int")]
        public int CategoryId { get; set; }

        [Column(TypeName = "nvarchar(150)")]
        public string CategoryName { get; set; }

        [Column(TypeName = "nvarchar(150)")]
        public string Parent { get; set; }

        [Column(TypeName = "nvarchar(150)")]
        public string Status { get; set; }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BIS.Common.Entities
{
    public class DashboardChart
    {
        public List<int>? Count { get; set; } = new List<int>();
        public List<string>? Name { get; set; } = new List<string>();
    }
    public class FilterModel
    {
        public List<string>? Frmn { get; set; }
        public List<string>? Sector { get; set; }
        public List<string>? Aspects { get; set; }
        public List<string>? Source { get; set; } 
        public List<string>? Indicator { get; set; } 
        public DateTime? startDate { get; set; }
        public DateTime? endDate { get; set; }
    }
}

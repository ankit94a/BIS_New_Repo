using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BIS.Common.Entities
{
    public class Aspect : BaseEntity
    {
        public string Name { get; set; }

    }
    public class Indicator : BaseEntity
    {
        public string Name { get; set; }
        public int AspectId { get; set; }

    }
    public class IndicatorSubFields : BaseEntity
    {
        public string Name { get; set; }
        public int IndicatorId { get; set; }

    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BIS.Common.Entities;
using static BIS.Common.Enum.Enum;

namespace BIS.Manager.Interfaces
{
    public interface IDashboardManager
    {
        public List<DashboardChart> GetFmnWiseData(long corpsId,long divisionId,RoleType roleType);
    }
}

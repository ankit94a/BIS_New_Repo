using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BIS.Common.Entities;
using BIS.DB.Interfaces;
using BIS.Manager.Interfaces;
using static BIS.Common.Enum.Enum;

namespace BIS.Manager.Implements
{
    public class DashboardManager : IDashboardManager
    {
        private readonly IDashboardDB _dashboardDB;
        public DashboardManager(IDashboardDB dashboardDB) 
        {
            _dashboardDB = dashboardDB;
        }
        public List<DashboardChart> GetFmnWiseData(long corpsId, long divisionId, RoleType roleType)
        {
            return _dashboardDB.GetFmnWiseData(corpsId, divisionId, roleType);
        }
    }
}

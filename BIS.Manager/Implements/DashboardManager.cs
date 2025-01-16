using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BIS.DB.Interfaces;
using BIS.Manager.Interfaces;

namespace BIS.Manager.Implements
{
    public class DashboardManager : IDashboardManager
    {
        private readonly IDashboardDB _dashboardDB;
        public DashboardManager(IDashboardDB dashboardDB) 
        {
            _dashboardDB = dashboardDB;
        }
    }
}

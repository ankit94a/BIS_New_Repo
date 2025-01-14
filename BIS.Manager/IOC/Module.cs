using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BIS.DB.Implements;
using BIS.DB.Interfaces;
using BIS.Manager.Implements;
using BIS.Manager.Interfaces;

namespace BIS.Manager.IOC
{
    public static class Module
    {
        public static Dictionary<Type, Type> GetTypes()
        {
            var dic = new Dictionary<Type, Type>
            {
                { typeof(IMasterDataManager), typeof(MasterDataManager) },
                { typeof(IUserManager), typeof(UserManager) },
                 { typeof(ICorpsManager), typeof(CorpsManager) },
                  { typeof(IRoleManager), typeof(RoleManager) },
                   { typeof(IGenerateReportManager), typeof(GenerateReportManager) },
            };
            return dic;
        }
    }
}

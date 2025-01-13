using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BIS.Common.Entities;
using BIS.DB.Interfaces;
using static BIS.Common.Enum.Enum;

namespace BIS.Manager.Interfaces
{
    public interface IMasterDataManager:IBaseManager<MasterData>
    {
        public List<MasterData> GetAllMasterData(int corpsId, RoleType roleType,int divisionId = 0);
    }
}

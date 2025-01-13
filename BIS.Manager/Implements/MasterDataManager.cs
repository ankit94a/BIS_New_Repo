using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BIS.Common.Entities;
using BIS.Common.Helpers;
using BIS.DB.Interfaces;
using BIS.Manager.Interfaces;
using Microsoft.EntityFrameworkCore;
using static BIS.Common.Enum.Enum;

namespace BIS.Manager.Implements
{
    public class MasterDataManager : IMasterDataManager
    {
        private IMasterDataDB _masterDataDB;
        public MasterDataManager(IMasterDataDB masterDataDB)
        {
            _masterDataDB = masterDataDB;
        }
        public List<MasterData> GetAll(int corpsId, int divisionId)
        {
            return _masterDataDB.GetAll(corpsId,divisionId);
        }
        public List<MasterData> GetAllMasterData(int corpsId, RoleType roleType, int divisionId = 0)
        {
            if(roleType ==RoleType.SuperAdmin)
            {

            }else if(roleType == RoleType.Admin)
            {

            }
            else
            {
                 
                
                
            }
            return _masterDataDB.GetAllMasterData();
        }
        public long Add(MasterData masterData)
        {
            throw new NotImplementedException();
        }
        public long Update(MasterData masterData)
        {
            throw new NotImplementedException();
        }
        public MasterData GetBy(int Id, int CorpsId)
        {
            throw new NotImplementedException();
        }

    }
}

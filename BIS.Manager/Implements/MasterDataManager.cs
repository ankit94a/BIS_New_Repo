using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BIS.Common.Entities;
using BIS.DB.Interfaces;
using BIS.Manager.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace BIS.Manager.Implements
{
    public class MasterDataManager : IMasterDataManager
    {
        private IMasterDataDB _masterDataDB;
        public MasterDataManager(IMasterDataDB masterDataDB)
        {
            _masterDataDB = masterDataDB;
        }
        public List<MasterData> GetAll(long corpsId,long divisionId)
        {
            return _masterDataDB.GetAll(corpsId,divisionId);
        }
        public List<MasterData> GetAllMasterData()
        {
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
        public MasterData GetBy(long Id, long CorpsId)
        {
            throw new NotImplementedException();
        }

    }
}

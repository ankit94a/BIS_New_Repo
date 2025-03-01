﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BIS.Common.Entities;

namespace BIS.DB.Interfaces
{
    public interface IMasterDataDB : IBaseDB<MasterData>
    {
        public List<MasterData> GetAllMasterData();
        public List<MasterData> GetByUserId(int userId);
        public List<MasterData> GetByIds(List<int> idsList);
    }
}

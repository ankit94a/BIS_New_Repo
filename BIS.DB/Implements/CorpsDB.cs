﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BIS.Common.Entities;
using BIS.DB.Interfaces;

namespace BIS.DB.Implements
{
    public class CorpsDB : ICorpsDB
    {
        private readonly AppDBContext _dbContext;
        public CorpsDB(AppDBContext dbContext) 
        { 
            _dbContext = dbContext;
        }
        public List<Corps> GetAll()
        {
            return _dbContext.Corps.ToList();
        }
        public List<Divisons> GetDivisonByCorps(long corpsId) 
        {
            return _dbContext.Divisons.Where(d => d.CorpsId == corpsId).ToList();
        }
    }
}

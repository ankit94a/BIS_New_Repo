using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BIS.Common.Entities;
using BIS.DB.Interfaces;
using static BIS.Common.Enum.Enum;

namespace BIS.DB.Implements
{
    public class DashboardDB : IDashboardDB
    {
        private readonly AppDBContext _dbContext;
        public DashboardDB(AppDBContext dbContext)
        {
            _dbContext = dbContext;
        }
        public DashboardChart GetAllMasterDataCount(long corpsId, long divisionId)
        {
            // use it for monthly chart
            var chart = new DashboardChart();
            var result = _dbContext.MasterDatas.Where(ms => ms.CorpsId == corpsId && ms.DivisionId == divisionId)
                            .GroupBy(ms => ms.Frmn) .Select(group => new{
                                Frmn = group.Key,        
                                Count = group.Count()    
                            }).ToList();

            foreach (var item in result) {
                chart.Name.Add(item.Frmn);
                chart.Count.Add(item.Count);
            }
            return chart;
        }
        public DashboardChart GetFrmnChart(long corpsId, long divisionId, DaysMonthFilter daysMonthFilter, FilterModel filterModel)
        {
            var chart = new DashboardChart();
            DateTime? filterDate = null;
            switch (daysMonthFilter)
            {
                case DaysMonthFilter.Days30:
                    filterDate = DateTime.UtcNow.AddDays(-30);
                    break;
                case DaysMonthFilter.Today:
                    filterDate = DateTime.UtcNow.Date;
                    break;
                case DaysMonthFilter.Months12:
                    filterDate = DateTime.UtcNow.AddMonths(-12);
                    break;
            }

            var query = _dbContext.MasterDatas.Where(ms => ms.CorpsId == corpsId && ms.DivisionId == divisionId);
            // handling Today, last30Days and All
            if (filterDate.HasValue)
            {
                query = daysMonthFilter == DaysMonthFilter.Today
                    ? query.Where(ms => ms.CreatedOn.Value.Date == DateTime.UtcNow.Date)
                    : query.Where(ms => ms.CreatedOn >= filterDate.Value);
            }
            // handling sector filter
            if (filterModel != null && filterModel.Sector.Count > 0)
            {
                query = query.Where(ms => filterModel.Sector.Contains(ms.Sector));
            }
            IEnumerable<dynamic> result;
            if (daysMonthFilter != DaysMonthFilter.Months12)
            {
                result = query.GroupBy(ms => ms.Frmn).Select(group => new
                {
                    Frmn = group.Key,
                    Count = group.Count()
                }).ToList();

                foreach (var item in result)
                {
                    if (item.Frmn != "" && item.Frmn != null)
                    {
                        chart.Name.Add(item.Frmn);
                        chart.Count.Add(item.Count);
                    }
                }
                return chart;
            }
            else
            {
                result = query.Where(m => (long)m.CorpsId == corpsId && (long?)m.DivisionId == divisionId).Where(m => m.CreatedOn >= filterDate)
                                .GroupBy(m => new { Year = m.CreatedOn.Value.Year, Month = m.CreatedOn.Value.Month })
                                .Select(g => new
                                {
                                    MonthYear = new DateTime(g.Key.Year, g.Key.Month, 1).ToString("MMM") + " " + g.Key.Year,
                                    Count = g.Count(),
                                    Year = g.Key.Year,
                                    Month = g.Key.Month
                                })
                                .OrderBy(e0 => e0.Year)  
                                .ThenBy(e0 => e0.Month) 
                                .Select(e0 => new
                                {
                                    MonthYear = e0.MonthYear,
                                    Count = e0.Count
                                }).ToList();

                foreach (var item in result)
                {
                    if (item.MonthYear != "" && item.MonthYear != null)
                    {
                        chart.Name.Add(item.MonthYear);
                        chart.Count.Add(item.Count);
                    }
                }
                return chart;
            }           
        }

        public DashboardChart GetAspectChart(long corpsId, long divisionId, DaysMonthFilter daysMonthFilter, FilterModel filterModel)
        {
            var chart = new DashboardChart();
            DateTime? filterDate = null;
            switch (daysMonthFilter)
            {
                case DaysMonthFilter.Days30:
                    filterDate = DateTime.UtcNow.AddDays(-30);
                    break;
                case DaysMonthFilter.Today:
                    filterDate = DateTime.UtcNow.Date;
                    break;
                case DaysMonthFilter.Months12:
                    filterDate = DateTime.UtcNow.AddMonths(-12);
                    break;
            }

            var query = _dbContext.MasterDatas.Where(ms => ms.CorpsId == corpsId && ms.DivisionId == divisionId);
            // handling Today, last30Days and All
            if (filterDate.HasValue)
            {
                query = daysMonthFilter == DaysMonthFilter.Today
                    ? query.Where(ms => ms.CreatedOn.Value.Date == DateTime.UtcNow.Date)
                    : query.Where(ms => ms.CreatedOn >= filterDate.Value);
            }
            // handling sector filter
            if (filterModel != null && filterModel.Sector.Count > 0)
            {
                query = query.Where(ms => filterModel.Sector.Contains(ms.Sector));
            }
            IEnumerable<dynamic> result;
            if (daysMonthFilter != DaysMonthFilter.Months12)
            {
                result = query.Where(m => (long)m.CorpsId == corpsId && (long?)m.DivisionId == divisionId).Where(m => m.CreatedOn >= filterDate)
                                .GroupBy(m => new { Year = m.CreatedOn.Value.Year, Month = m.CreatedOn.Value.Month,m.Aspect })
                                .Select(g => new
                                {
                                    MonthYear = new DateTime(g.Key.Year, g.Key.Month, 1).ToString("MMM") + " " + g.Key.Year,
                                    Count = g.Count(),
                                    Year = g.Key.Year,
                                    Month = g.Key.Month,
                                    Aspect = g.Key.Aspect,
                                })
                                .OrderBy(e => e.Year)
                                .ThenBy(e => e.Month)
                                .Select(e => new
                                {
                                    MonthYear = e.MonthYear,
                                    Count = e.Count,
                                    Aspect = e.Aspect
                                }).ToList();

                foreach (var item in result)
                {
                    if (item.MonthYear != "" && item.MonthYear != null)
                    {
                        chart.Name.Add(item.MonthYear);
                        chart.Count.Add(item.Count);
                    }
                }
                return chart;
            }
            else
            {
                result = query.GroupBy(ms => ms.Aspect).Select(group => new
                {
                    Aspect = group.Key,
                    Count = group.Count()
                }).ToList();
                foreach (var item in result)
                {
                    if (item.Aspect != "" && item.Aspect != null)
                    {
                        chart.Name.Add(item.Aspect);
                        chart.Count.Add(item.Count);
                    }
                }
                return chart;
            }                     
        }
       
        public List<MasterData> GetDivisionFrmChart(long corpsId, long divisionId, FilterModel filterModel)
        {
            var query = _dbContext.MasterDatas.Where(ms => ms.CorpsId == corpsId);
            if (filterModel != null && filterModel.Sector.Count > 0)
            {
                query = query.Where(ms => filterModel.Sector.Contains(ms.Sector));
            }
            return query.ToList();
        }

    }
}

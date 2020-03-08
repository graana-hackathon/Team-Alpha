
using Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core
{
    public class GraanaService
    {

        private readonly TrainingEntities _db;


        public GraanaService()
        {
            _db = new TrainingEntities();
        }

        public List<SearchByString_Result> SearchByEveryThing(string SearchString)
        {
            List<SearchByString_Result> result = _db.SearchByString(SearchString).ToList();
            
            return result;
        }
    }
}

using Core;
using Data;
using GraanaHackathonServer.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;
using HttpGetAttribute = System.Web.Http.HttpGetAttribute;

namespace GraanaHackathonServer.Controllers
{
    public class ValuesController : ApiController
    {
        private readonly GraanaService _graanaService;

        public ValuesController()
        {
            _graanaService = new GraanaService();
        }
        // GET api/values




        [HttpGet]
        public ApiGenericModel<List<SearchByString_Result>> Search(string SearchString)
        {
            ApiGenericModel<List<SearchByString_Result>> apiGenericModel = new ApiGenericModel<List<SearchByString_Result>>();
            apiGenericModel.Data = new List<SearchByString_Result>();
            try
            {
                string DeserializedSearchString = JsonConvert.DeserializeObject(SearchString) as string;
                List<SearchByString_Result> Response = _graanaService.SearchByEveryThing(DeserializedSearchString);
                if (Response != null && Response.Count > 0)
                {
                    apiGenericModel.IsSuccess = true;
                    apiGenericModel.Message = "Data is here ";
                    apiGenericModel.Data = Response;
                }
                else
                {
                    apiGenericModel.IsSuccess = false;
                    apiGenericModel.Message = "Data is not here";
                    apiGenericModel.Data = Response;

                }

            }
            catch (Exception ex)
            {
                apiGenericModel.IsSuccess = false;
                apiGenericModel.Message = ex.Message;
            }
            return apiGenericModel;
        }
    }
}

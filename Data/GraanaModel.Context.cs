﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Data
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    using System.Data.Entity.Core.Objects;
    using System.Linq;
    
    public partial class TrainingEntities : DbContext
    {
        public TrainingEntities()
            : base("name=TrainingEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<PricebookGraana> PricebookGraanas { get; set; }
    
        public virtual ObjectResult<SearchByString_Result> SearchByString(string searchString)
        {
            var searchStringParameter = searchString != null ?
                new ObjectParameter("SearchString", searchString) :
                new ObjectParameter("SearchString", typeof(string));
    
            return ((IObjectContextAdapter)this).ObjectContext.ExecuteFunction<SearchByString_Result>("SearchByString", searchStringParameter);
        }
    }
}
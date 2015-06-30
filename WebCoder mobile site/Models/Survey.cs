namespace Mobile_site.Models
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Survey")]
    public partial class Survey
    {
        public Survey()
        {
            SurveyAnswers = new HashSet<SurveyAnswer>();
            SurveyQuestions = new HashSet<SurveyQuestion>();
        }

        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int SurveyID { get; set; }

        public virtual ICollection<SurveyAnswer> SurveyAnswers { get; set; }

        public virtual ICollection<SurveyQuestion> SurveyQuestions { get; set; }
    }
}

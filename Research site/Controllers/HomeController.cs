using Research_site.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Research_site.Controllers
{
    public class HomeController : Controller
    {

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Declaration()
        {
            return View();
        }

        public bool Count()
        {
            var c = new ResearchDB();
            var UI1 = c.Users.Count(s => s.OptimisedUI == true);
            var UI2 = c.Users.Count(s => s.OptimisedUI == false);
            if (UI1 > UI2)
            {
                return false;
            }
            else
            {
                return true;
            }
        }

        public ActionResult StartResearch()
        {
            var c = new ResearchDB();
            var u = new User
            {
                StartTime = DateTime.Now,
                EndTime = DateTime.Now,
                OptimisedUI = Count()
            };

            c.Users.Add(u);
            c.SaveChanges();
            var ID = u.UserID;
            var UI = u.OptimisedUI;
            Response.Cookies.Add(new HttpCookie("UserID", ID.ToString()));
            Response.Cookies.Add(new HttpCookie("OptimisedUI", UI.ToString()));
            return View();
        }

        public ActionResult Survey1()
        {
            var c = new ResearchDB();
            var question = c.Surveys.First(s => s.SurveyID == 1).SurveyQuestions.First(q => q.QuestionID == 1);
            ViewBag.questiontext = question.QuestionText;
            ViewBag.survNum = 1;
            ViewBag.questNum = 1;
            return View();
        }

        [HttpPost]
        public ActionResult Survey1(FormCollection form)
        {
            var survNum = form["survNum"];
            var questNum = form["questNum"];
            var answer = form["input"];
            var c = new ResearchDB();
            var UserID = Request.Cookies["UserID"].Value;
            var surveyNum = int.Parse(survNum);
            var questionNum = int.Parse(questNum);
            var currentQuestion = c.Surveys.First(s => s.SurveyID == surveyNum).SurveyQuestions.First(q => q.QuestionID == questionNum);
            c.SurveyAnswers.Add(new SurveyAnswer
            {
                QuestionID = currentQuestion.QuestionID,
                SurveyID = surveyNum,
                UserID = int.Parse(UserID),
                Value = answer
            });

            c.SaveChanges();
            if (questionNum <= 4)
            {
                questionNum++;
                var question = c.Surveys.First(s => s.SurveyID == surveyNum).SurveyQuestions.First(q => q.QuestionID == questionNum);
                ViewBag.questiontext = question.QuestionText;
                ViewBag.questNum = questionNum;
                ViewBag.survNum = surveyNum;
                return View();
            }
            else
            {
                return View("Survey1Complete");
            }
        }

        public ActionResult Survey1Complete()
        {
            return View();
        }

        public ActionResult TutorialComplete()
        {
            return View();
        }

        public ActionResult TestComplete()
        {
            return View();
        }

        public ActionResult Loading()
        {
            var UI = Request.Cookies["OptimisedUI"].Value;
            if (UI == "False")
            {
                Response.Redirect("http://localhost:57178"); //Simplified
            }
            else
            {
                Response.Redirect("http://localhost:57177"); //Optimised
            }
            return View();
        }

        public ActionResult Test()
        {
            return View();
        }

        public ActionResult Survey2()
        {
            var c = new ResearchDB();
            var question = c.Surveys.First(s => s.SurveyID == 2).SurveyQuestions.First(q => q.QuestionID == 1);
            ViewBag.questiontext = question.QuestionText;
            ViewBag.survNum = 2;
            ViewBag.questNum = 1;
            return View();
        }

        [HttpPost]
        public ActionResult Survey2(FormCollection form)
        {
            var survNum = form["survNum"];
            var questNum = form["questNum"];
            var answer = form["input"];
            var c = new ResearchDB();
            var UserID = Request.Cookies["UserID"].Value;
            var surveyNum = int.Parse(survNum);
            var questionNum = int.Parse(questNum);
            var currentQuestion = c.Surveys.First(s => s.SurveyID == surveyNum).SurveyQuestions.First(q => q.QuestionID == questionNum);
            c.SurveyAnswers.Add(new SurveyAnswer
            {
                QuestionID = currentQuestion.QuestionID,
                SurveyID = surveyNum,
                UserID = int.Parse(UserID),
                Value = answer
            });

            c.SaveChanges();
            if (questionNum < 10)
            {
                if (questionNum == 3 || questionNum == 4)
                {
                    questionNum = 6;
                }
                else if (questionNum == 9)
                {
                    ViewBag.questiontext = "Do you have any other comments?";   
                    return View("Comments");
                }
                else
                {
                    questionNum++;
                }
                var question = c.Surveys.First(s => s.SurveyID == surveyNum).SurveyQuestions.First(q => q.QuestionID == questionNum);
                ViewBag.questiontext = question.QuestionText;
                ViewBag.questNum = questionNum;
                ViewBag.survNum = surveyNum;
                return View();
            }
            else
            {
                return View("Survey2Complete");
            }
        }

        public ActionResult Comments(FormCollection form)
        {
            ViewBag.questiontext = "Do you have any other comments?";
            var c = new ResearchDB();
            var answer = form["input"];
            int surveyNum = 2;
            int questionNum = 10;
            var UserID = Request.Cookies["UserID"].Value;
            var question = c.Surveys.First(s => s.SurveyID == surveyNum).SurveyQuestions.First(q => q.QuestionID == questionNum);
            c.SurveyAnswers.Add(new SurveyAnswer
            {
                QuestionID = 10,
                SurveyID = 2,
                UserID = int.Parse(UserID),
                Value = answer
            });
            c.SaveChanges();
            SaveEndTime();
            ViewBag.questiontext = question.QuestionText;
            return View("Survey2Complete");
        }

        public ActionResult Survey2Complete()
        {
            return View();
        }

        public ActionResult OptimisedUI()
        {
            return View();
        }

        public ActionResult PlainUI()
        {
            return View();
        }

        [HttpPost]
        public ActionResult SaveScore(int Score, String [] Answers)
        {
            var c = new ResearchDB();
            var UserID = Request.Cookies["UserID"].Value;
            var UserIDint = int.Parse(UserID);
            var user = c.Users.Find(UserIDint);
            user.Score = Score;
            c.SaveChanges();
            return null;
        }

        public ActionResult SaveEndTime()
        {
            var c = new ResearchDB();
            var UserID = Request.Cookies["UserID"].Value;
            var UserIDint = int.Parse(UserID);
            var user = c.Users.Find(UserIDint);
            user.EndTime = DateTime.Now;
            c.SaveChanges();
            return null;
        }


    }
}
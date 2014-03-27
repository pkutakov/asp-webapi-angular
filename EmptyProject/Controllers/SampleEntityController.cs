using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using EmptyProject.Models;

namespace EmptyProject.Controllers
{
    public class SampleEntityController : ApiController
    {
        private ApplicationDbContext db = new ApplicationDbContext();

        // GET api/SampleEntity
        public IQueryable<SampleEntity> GetSampleEntities()
        {
            return db.SampleEntities;
        }

        // GET api/SampleEntity/5
        [ResponseType(typeof(SampleEntity))]
        public IHttpActionResult GetSampleEntity(int id)
        {
            SampleEntity sampleentity = db.SampleEntities.Find(id);
            if (sampleentity == null)
            {
                return NotFound();
            }

            return Ok(sampleentity);
        }

        // PUT api/SampleEntity/5
        public IHttpActionResult PutSampleEntity(int id, SampleEntity sampleentity)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != sampleentity.ID)
            {
                return BadRequest();
            }

            db.Entry(sampleentity).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SampleEntityExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST api/SampleEntity
        [ResponseType(typeof(SampleEntity))]
        public IHttpActionResult PostSampleEntity(SampleEntity sampleentity)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.SampleEntities.Add(sampleentity);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = sampleentity.ID }, sampleentity);
        }

        // DELETE api/SampleEntity/5
        [ResponseType(typeof(SampleEntity))]
        public IHttpActionResult DeleteSampleEntity(int id)
        {
            SampleEntity sampleentity = db.SampleEntities.Find(id);
            if (sampleentity == null)
            {
                return NotFound();
            }

            db.SampleEntities.Remove(sampleentity);
            db.SaveChanges();

            return Ok(sampleentity);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool SampleEntityExists(int id)
        {
            return db.SampleEntities.Count(e => e.ID == id) > 0;
        }
    }
}
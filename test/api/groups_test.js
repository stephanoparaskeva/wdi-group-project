/* global describe it api expect afterEach beforeEach */
require('../spec_helper')
const Group = require('../../models/group')



describe('Groups controller test', () => {

  beforeEach(done =>  {
    Group.collection.remove()
    done()
  })

  afterEach(done =>  {
    Group.collection.remove()
    done()
  })

  describe('GET /api/groups', () => {

    beforeEach(done => {
      Group.create({
        name: 'Jess Hen',
        description: 'Yo girls. This is a group I set up to help organise Jess\'s hen party in Ibiza'
      })
        .then(() => done())
        .catch(done)
    })

    it('should return a 200 response', done => {
      api
        .get('/api/groups')
        .set('Accept', 'application/json')
        .expect(200, done)
    })


    it('should return a JSON object', done => {
      api
        .get('/api/groups')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.header['content-type'])
            .to.be.eq('application/json; charset=utf-8')
          done()
        })
    })

    it('should return an array', done => {
      api
        .get('/api/groups')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body).to.be.an('array')
          done()
        })
    })

    it('should return an array of group objects', done => {
      api
        .get('/api/groups')
        .set('Accept', 'application/json')
        .end((err, res) => {
          expect(res.body)
            .to.be.an('array')
            .and.have.property(0)
            .and.have.all.keys([
              '_id',
              '__v',
              'name',
              'createdBy',
              'createdAt',
              'updatedAt'
            ])
          done()
        })
    })

    it('should have correct properties', done => {
      api
        .get('/api/groups')
        .set('Accept', 'application/json')
        .end((err, res) => {
          const firstGroup = res.body[0]

          expect(firstGroup)
            .to.have.property('_id')
            .and.to.be.a('string')

          expect(firstGroup)
            .to.have.property('name')
            .and.to.be.a('string')

          expect(firstGroup)
            .to.have.property('createdBy')
            .and.to.be.a('string')

          expect(firstGroup)
            .to.have.property('createdAt')
            .and.to.be.a('string')

          expect(firstGroup)
            .to.have.property('updatedAt')
            .and.to.be.a('string')

          done()
        })
    })

    describe('should make more than one group', () => {

      beforeEach(done => {
        Group.create([{
          name: 'Jess Hen',
          description: 'Yo girls. This is a group I set up to help organise Jess\'s hen party in Ibiza'
        }, {
          name: 'Stephano',
          description: 'Lads, This is a group I set up to help organise Stephano\'s leaving party before he moves to mainland Greece'
        }, {
          name: 'Matt Birthday',
          description: 'Boys, This is a group I set up to help organise Matts birthday party'
        }, {
          name: 'Mary Hen',
          description: 'Yo girls. This is a group I set up to help organise Marys hen party in Miami'
        }])
          .then(() => done())
          .catch(done)
      })

      it('should return 5 groups', done => {
        api
          .get('/api/groups')
          .set('Accept', 'application/json')
          .end((err, res) => {
            expect(res.body.length).to.equal(5)
            done()
          })
      })
    })
  })

  describe('POST /api/groups', () => {

    it('should return a 201 response', done => {
      api
        .post('/api/groups')
        .set('Accept', 'application/json')
        .send({
          group: {
            name: 'Jess Hen',
            description: 'Yo girls. This is a group I set up to help organise Jess\'s hen party in Ibiza'
          }
        })
        .expect(201, done)
    })

    it('should create a group', done => {
      api
        .post('/api/groups')
        .set('Accept', 'application/json')
        .send({
          group: {
            name: 'Jess Hen',
            description: 'Yo girls. This is a group I set up to help organise Jess\'s hen party in Ibiza'
          }
        })
        .end((err, res) => {
          const group = res.body

          expect(group)
            .to.have.property('_id')
            .and.to.be.a('string')

          expect(group)
            .to.have.property('name')
            .and.to.be.a('string')

          expect(group)
            .to.have.property('createdBy')
            .and.to.be.a('string')

          expect(group)
            .to.have.property('createdAt')
            .and.to.be.a('string')

          expect(group)
            .to.have.property('updatedAt')
            .and.to.be.a('string')

          done()
        })
    })
  })

  describe('GET /api/groups/:id', () => {

    let group

    beforeEach(done => {
      Group
        .create({
          name: 'Jess Hen',
          description: 'Yo girls. This is a group I set up to help organise Jess\'s hen party in Ibiza'
        })
        .then(groupData => {
          group = groupData
          done()
        })
        .catch(done)
    })

    it('should return a 200 response', done => {
      api
        .get(`/api/groups/${group.id}`)
        .set('Accept', 'application/json')
        .expect(200, done)
    })
  })

  describe('DELETE /api/groups/:id', () => {

    let group

    beforeEach(done => {
      Group
        .create({
          name: 'Jess Hen',
          description: 'Yo girls. This is a group I set up to help organise Jess\'s hen party in Ibiza'
        })
        .then(groupData => {
          group = groupData
          done()
        })
        .catch(done)
    })

    it('should return a 200 response', done => {
      api
        .delete(`/api/groups/${group.id}`)
        .set('Accept', 'application/json')
        .expect(204, done)
    })
  })
})

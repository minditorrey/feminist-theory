'use strict';

var app = angular.module('feministTheoryApp');

app.service('PostsService', function($http) {
	this.getAll = function() {
    	return $http.get('/api/posts');
  	};

	this.create = function(post) {
		return $http.post('/api/posts', post);	
	};

	this.update = function(post) {
    	return $http.put(`/api/posts/${post._id}`, post);
  	};

  	this.removePost = function(post) {
  		return $http.delete(`/api/posts/${post._id}`);
  	};

  	this.getThisPost = function(id) {
  		return $http.get(`/api/posts/${id}`);
  	};

  	this.updateLikes = function(post) {
      return $http.put(`/api/posts/likes/${post._id}`, post);
    }
    this.updateDislikes = function(post) {
      return $http.put(`/api/posts/dislikes/${post._id}`, post);
    }
});

app.service('ResourcesService', function($http) {
	this.getAll = function() {
    	return $http.get('/api/resources');
  	};
  	this.create = function(resource) {
		return $http.post('/api/resources', resource);	
	};

	this.updateLikes = function(resource) {
      return $http.put(`/api/resources/likes/${resource._id}`, resource);
    }
    this.updateDislikes = function(resource) {
      return $http.put(`/api/resources/dislikes/${resource._id}`, resource);
    }
});

app.service('PitchesService', function($http) {
	this.getAll = function() {
    	return $http.get('/api/pitches');
  	};
  	this.create = function(pitch) {
		return $http.post('/api/pitches', pitch);	
	};

	this.updateLikes = function(pitch) {
      return $http.put(`/api/pitches/likes/${pitch._id}`, pitch);
    }
    this.updateDislikes = function(pitch) {
      return $http.put(`/api/pitches/dislikes/${pitch._id}`, pitch);
    }
});

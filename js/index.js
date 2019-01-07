angular.module('app', [])

angular.module('app').controller('QuestionsController', function($scope, QuestionsFactory) {

    $scope.title = 'Quiz Question Creator';
    $scope.questions = QuestionsFactory.questions;
    $scope.create = function(question){
      if(!question.questionText) return;
      QuestionsFactory.add(question);
      $scope.draftQuestion = {};
    }
    $scope.remove = function(question){
      QuestionsFactory.remove(question);
    }
    $scope.edit = function(question){
      question.editing = true;
    }
    $scope.save = function(question){
      question.editing = false;
    }

});

angular.module('app').factory('QuestionsFactory', function(){

    return {
        questions: [],
        add: function(question){
          this.questions.push(question);
        },
        remove: function(question){
          var i = this.questions.indexOf(question);
          this.questions.splice(i,1);
        }
    };

});

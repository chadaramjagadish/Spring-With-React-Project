package org.jsp.userbootapp.service;

import java.lang.StackWalker.Option;
import java.util.List;
import java.util.Optional;

import org.jsp.userbootapp.dao.UserDao;
import org.jsp.userbootapp.dto.ResponseStructure;
import org.jsp.userbootapp.dto.User;
import org.jsp.userbootapp.exception.IdNotFoundException;
import org.jsp.userbootapp.exception.InvalidCredentialsException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

@Service
public class UserService
{
	@Autowired
	private UserDao dao;
	
	public ResponseEntity<ResponseStructure<User>> saveUser(User u)
	{
		ResponseStructure<User> structure=new ResponseStructure<>();
		structure.setData(dao.saveUser(u));
		structure.setMessage("user saved with the id:"+u.getId());
		structure.setStatusCode(HttpStatus.CREATED.value());
		return new ResponseEntity<ResponseStructure<User>>(structure, HttpStatus.CREATED);
		
	}
	
	public ResponseEntity<ResponseStructure<User>> updateUser(@RequestBody User u)
	{
		ResponseStructure<User> structure=new ResponseStructure<>();
		structure.setData(dao.updateUser(u));
		structure.setMessage("user updated");
		structure.setStatusCode(HttpStatus.ACCEPTED.value());
		return new ResponseEntity<ResponseStructure<User>>(structure, HttpStatus.ACCEPTED);
	}
	
	public ResponseEntity<ResponseStructure<User>> findById(int id)
	{
		ResponseStructure<User> structure=new ResponseStructure<>();
		Optional<User> recUser=dao.findById(id);
		if(recUser.isPresent()) {
			structure.setMessage("User found");
			structure.setData(recUser.get());
			structure.setStatusCode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructure<User>>(structure, HttpStatus.OK);
		}
		throw new IdNotFoundException();
	}
	
	public ResponseEntity<ResponseStructure<String>> deleteUser(int id)
	{
		ResponseStructure<String> structure=new ResponseStructure<>();
		Optional<User> recUser=dao.findById(id);
		if(recUser.isPresent()) 
		{
			structure.setMessage("user deleted");
			structure.setData("user found");
			structure.setStatusCode(HttpStatus.OK.value());
			dao.deleteUser(id);
			return new ResponseEntity<ResponseStructure<String>>(structure, HttpStatus.OK);
		}
		else
		{
			structure.setMessage("User Not found");
			structure.setData(null);
			structure.setStatusCode(HttpStatus.NOT_FOUND.value());
		}
		return new ResponseEntity<ResponseStructure<String>>(structure, HttpStatus.ACCEPTED);
	}
	
	
	public ResponseEntity<ResponseStructure<List<User>>> findAll()
	{
		ResponseStructure<List<User>> structure=new ResponseStructure<>();
		structure.setData(dao.findAll());
		structure.setMessage("Users found");
		structure.setStatusCode(HttpStatus.OK.value());
		return new ResponseEntity<ResponseStructure<List<User>>>(structure,HttpStatus.OK);
	}

	
	public ResponseEntity<ResponseStructure<User>> verifyUser(long phone, String password)
	{
		ResponseStructure<User> structure=new ResponseStructure<>();
		Optional<User> recUser=dao.verifyUser(phone, password);
		if(recUser.isPresent())
		{
			structure.setData(recUser.get());
			structure.setMessage("User verified sucessfully");
			structure.setStatusCode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructure<User>>(structure,HttpStatus.OK);
		}
		throw new InvalidCredentialsException();
	}
	
	public ResponseEntity<ResponseStructure<User>> verifyUser(String email,String password)
	{
		ResponseStructure<User> structure=new ResponseStructure<>();
		Optional<User> recUser=dao.verifyUser(email, password);
		if(recUser.isPresent())
		{
			structure.setData(recUser.get());
			structure.setMessage("User verified sucessfully");
			structure.setStatusCode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructure<User>>(structure,HttpStatus.OK);
		}
		throw new InvalidCredentialsException();
	}

}

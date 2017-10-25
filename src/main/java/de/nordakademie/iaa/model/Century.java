package de.nordakademie.iaa.model;

import javax.persistence.Basic;
import javax.persistence.Entity;

@Entity
public class Century extends Group {

	private int numberOfStudents;

	public Century() {}

	public Century(String name, int minChangeoverTime, int numberOfStudents) {
		super(name, minChangeoverTime);
		this.numberOfStudents = numberOfStudents;
	}

	@Basic
	public int getNumberOfStudents() {
		return numberOfStudents;
	}

	public void setNumberOfStudents(int numberOfStudents) {
		this.numberOfStudents = numberOfStudents;
	}

	@Override
	public int calculateNumberOfStudents() {
		return getNumberOfStudents();
	}
}
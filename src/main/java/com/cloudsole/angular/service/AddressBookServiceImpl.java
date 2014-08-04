package com.cloudsole.angular.service;

import com.cloudsole.angular.model.AddressBook;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by tmichels on 8/3/14.
 */
@Service
public class AddressBookServiceImpl implements AddressBookService {

    List<AddressBook> addressBooks = new ArrayList<AddressBook>();
    private static Long id = 0L;

    @Override
    public List<AddressBook> viewAllAddressBook() {
        return addressBooks;
    }

    @Override
    public void createAddressBook(AddressBook addressBook) {
        addressBook.setId(id);
        addressBooks.add(addressBook);
        ++id;
    }

    @Override
    public void updateAddressBook(int pos, AddressBook updateAddressBook) {
        addressBooks.set(pos, updateAddressBook);
    }

    @Override
    public void deleteAddressBook(int id) {
        addressBooks.remove(id);
    }

    @Override
    public void deleteAllAddressBook() {
        addressBooks.clear();
        id = 0L;
    }

    @Override
    public AddressBook findAddressBook(int id) {
        return addressBooks.get(id);
    }
}
